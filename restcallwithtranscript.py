import speech_recognition as sr
import requests
import json

def convert_live_audio_to_text(text_file_path, endpoint_url):
    recognizer = sr.Recognizer()
    microphone = sr.Microphone()
    
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
                            print("Endpoint response: ", response_data)
                        else:
                            print(f"Error: {response.status_code}, {response.text}")
                    except sr.UnknownValueError:
                        print("Google Speech Recognition could not understand the audio")
                    except sr.RequestError as e:
                        print(f"Could not request results from Google Speech Recognition service; {e}")
                    except requests.RequestException as e:
                        print(f"Could not send request to the endpoint; {e}")
        
        except KeyboardInterrupt:
            print("\nTranscription ended by user")

# Test the live audio transcription
endpoint_url = 'http://172.191.181.102:8002/predict'  # Update with your endpoint URL if different
convert_live_audio_to_text('live_transcription.txt', endpoint_url)
