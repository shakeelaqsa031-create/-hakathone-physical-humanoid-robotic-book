from openai import AsyncOpenAI
import os

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
client = AsyncOpenAI(api_key=OPENAI_API_KEY)

async def generate_response(prompt: str, model: str = "gpt-3.5-turbo"):
    response = await client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": "You are a helpful AI tutor for a robotics textbook."},
            {"role": "user", "content": prompt}
        ]
    )
    return response.choices[0].message.content
