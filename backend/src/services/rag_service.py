from backend.src.services.llm_service import generate_response

async def process_chat(query: str, context: str = None, user_level: str = "beginner"):
    # Construct prompt based on context and level
    system_instruction = f"Explain the following concept to a {user_level} student."
    
    if context:
        prompt = f"{system_instruction}\n\nContext: \"{context}\"\n\nQuestion: {query}"
    else:
        # TODO: Implement Global RAG (Vector Search) here for Phase 6
        prompt = f"{system_instruction}\n\nQuestion: {query}"
    
    answer = await generate_response(prompt)
    return answer
