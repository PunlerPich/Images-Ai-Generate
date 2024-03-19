import os
import json

import openai
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from dotenv import load_dotenv

load_dotenv()  # Load API key from .env
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

@csrf_exempt
def generate_image(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            text_prompt = data.get("text_prompt")

            # Error handling for missing text prompt
            if not text_prompt:
                return JsonResponse({"error": "Text prompt is required"}, status=400)

            print(f"text_prompt: {text_prompt}")
            print(f"OPENAI_API_KEY: {OPENAI_API_KEY}")

            openai.api_key = OPENAI_API_KEY
            response = openai.Image.create(
                prompt=text_prompt,
                size="1024x1024",  # Adjust image size as needed
                n=3,  # Number of images to generate
            )
            image_urls = [image["url"] for image in response.data]
            print(f"image_urls: {image_urls}")
            return JsonResponse({"image_urls": image_urls})

        except Exception as e:
            print(f"Exception: {e}")
            return JsonResponse({"error": str(e)}, status=500)

    else:
        return JsonResponse({"error": "Invalid request method"}, status=405)
