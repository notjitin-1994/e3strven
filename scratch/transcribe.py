import os
import sys
from google import genai
from google.genai import types

def main():
    try:
        client = genai.Client()
        file_path = "/mnt/c/Users/jitin/OneDrive/MyPC/Downloads/WhatsApp Ptt 2026-08-12 at 16.20.31.ogg"
        
        # Upload the file
        print("Uploading file...")
        audio_file = client.files.upload(file=file_path)
        
        # Generate content
        print("Generating summary...")
        response = client.models.generate_content(
            model='gemini-2.5-pro',
            contents=[audio_file, "Please transcribe and summarize this voice note."]
        )
        print("--- RESULT ---")
        print(response.text)
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
