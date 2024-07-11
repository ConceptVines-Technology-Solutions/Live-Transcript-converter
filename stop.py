import speech_recognition as sr
import requests
import json
from flask import Flask, jsonify
from concurrent.futures import ThreadPoolExecutor
import uuid
from flask_cors import CORS
import threading

app = Flask(__name__)
CORS(app, origins="*")
executor = ThreadPoolExecutor(max_workers=1)

tasks = {}

def convert_live_audio_to_text(task_id, text_file_path, endpoint_url, stop_event):
    recognizer = sr.Recognizer()
    microphone = sr.Microphone()
    sentiment = "Casual"
    print("Please start speaking...")

    with open(text_file_path, 'w') as file:
        try:
            with microphone as source:
                recognizer.adjust_for_ambient_noise(source)
                print("Listening... (Press Ctrl+C to stop)")

                while not stop_event.is_set():
                    print("Say something!")
                    audio_data = recognizer.listen(source, timeout=5)

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
                            
                        else:
                            print(f"Error: {response.status_code}, {response.text}")
                            tasks[task_id]['status'] = 'failed'
                            tasks[task_id]['error'] = response.text

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
    stop_event = threading.Event()
    tasks[task_id] = {'status': 'in_progress', 'sentiment': None, 'error': None, 'stop_event': stop_event}
    endpoint_url = 'http://172.191.181.102:8002/predict'  # Update with your endpoint URL if different
    executor.submit(convert_live_audio_to_text, task_id, f'{task_id}.txt', endpoint_url, stop_event)
    return jsonify({'task_id': task_id})

@app.route('/get_sentiment/<task_id>', methods=['GET'])
def get_sentiment(task_id):
    task = tasks.get(task_id)
    if task:
        # Create a copy of the task dictionary excluding non-serializable objects
        task_info = {key: value for key, value in task.items() if key != 'stop_event'}
        return jsonify(task_info)
    else:
        return jsonify({'error': 'Task ID not found'}), 404

@app.route('/stop_transcription/<task_id>', methods=['GET'])
def stop_transcription(task_id):
    task = tasks.get(task_id)
    if task and 'stop_event' in task:
        stop_event = task['stop_event']
        stop_event.set()
        tasks[task_id]['status'] = 'interrupted'
        return jsonify({'status': 'stopped', 'task_id': task_id})
    else:
        return jsonify({'error': 'Task ID not found'}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
