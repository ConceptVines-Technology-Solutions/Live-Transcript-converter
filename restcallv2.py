import speech_recognition as sr
import requests
import json
import time
from flask import Flask, jsonify
from concurrent.futures import ThreadPoolExecutor
import uuid
from flask_cors import CORS

app = Flask(__name__)
CORS(app,origins="")
executor = ThreadPoolExecutor(max_workers=2)

tasks = {}

def convert_live_audio_to_text(task_id, text_file_path, endpoint_url):
    recognizer = sr.Recognizer()
    microphone = sr.Microphone()
    sentiment = "Casual"
    print("Please start speaking...")

    with open(text_file_path, 'w') as file:
        try:
            with microphone as source:
                recognizer.adjust_for_ambient_noise(source)
                print("Listening... (Press Ctrl+C to stop)")

                while True:
                    print("Say something!")
                    audio_data = recognizer.listen(source)

                    try:
                        text = recognizer.recognize_google(audio_data)
                        print("You said: " + text)

                        # Write the text to a file
                        file.write(text + "\n")
                        file.flush()  # Ensure the text is written to the file immediately

                        # Prepare the payload and headers
                        payload = {'transcript': text}
                        headers = {'Content-Type': 'application/json'}

                        # Log the payload
                        print(f"Sending payload: {json.dumps(payload)}")

                        # Call the REST endpoint with the transcribed text
                        response = requests.post(endpoint_url, json=payload, headers=headers)

                        # Print the response from the endpoint
                        if response.ok:
                            response_data = response.json()
                            sentiment = response_data["sentiment"]
                            print("Endpoint response: ", response_data)
                            tasks[task_id]['status'] = 'completed'
                            tasks[task_id]['sentiment'] = sentiment
                            return
                        else:
                            print(f"Error: {response.status_code}, {response.text}")
                            tasks[task_id]['status'] = 'failed'
                            tasks[task_id]['error'] = response.text
                            return
                    except sr.UnknownValueError:
                        print("Google Speech Recognition could not understand the audio")
                    except sr.RequestError as e:
                        print(f"Could not request results from Google Speech Recognition service; {e}")
                    except requests.RequestException as e:
                        print(f"Could not send request to the endpoint; {e}")

        except KeyboardInterrupt:
            print("\nTranscription ended by user")
            tasks[task_id]['status'] = 'interrupted'
            return

@app.route('/start_transcription', methods=['GET'])
def start_transcription():
    task_id = str(uuid.uuid4())
    tasks[task_id] = {'status': 'in_progress', 'sentiment': None, 'error': None}
    endpoint_url = 'http://172.191.181.102:8002/predict'  # Update with your endpoint URL if different
    executor.submit(convert_live_audio_to_text, task_id, 'live_transcription.txt', endpoint_url)
    return jsonify({'task_id': task_id})

@app.route('/get_sentiment/<task_id>', methods=['GET'])
def get_sentiment(task_id):
    task = tasks.get(task_id)
    if task:
        return jsonify(task)
    else:
        return jsonify({'error': 'Task ID not found'}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
