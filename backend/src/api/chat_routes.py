from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional
from backend.src.services.rag_service import process_chat

router = APIRouter(prefix="/chat", tags=["chat"])

class ChatRequest(BaseModel):
    query: str
    context: Optional[str] = None
    user_level: str = "beginner"

class ChatResponse(BaseModel):
    answer: str

@router.post("/", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    answer = await process_chat(request.query, request.context, request.user_level)
    return ChatResponse(answer=answer)
