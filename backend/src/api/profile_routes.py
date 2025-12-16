from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from backend.src.core.database import get_db
from backend.src.models.user import User, UserProfile
from backend.src.api.deps import get_current_user

router = APIRouter(prefix="/profile", tags=["profile"])

@router.get("/", response_model=UserProfile)
async def get_profile(current_user: User = Depends(get_current_user)):
    return current_user.profile

@router.post("/", response_model=UserProfile)
async def update_profile(profile_in: UserProfile, current_user: User = Depends(get_current_user), db: AsyncSession = Depends(get_db)):
    # Update profile fields
    # Since User.profile is a Pydantic model nested in SQLModel/SQLAlchemy JSON field (likely), 
    # we need to be careful. If using standard SQLAlchemy, it's a relationship or JSON column.
    # In models/user.py I defined it as a Pydantic model field. 
    # For this MVP I'll assume it's a JSON column or simple reassignment.
    
    current_user.profile = profile_in
    db.add(current_user)
    await db.commit()
    await db.refresh(current_user)
    return current_user.profile
