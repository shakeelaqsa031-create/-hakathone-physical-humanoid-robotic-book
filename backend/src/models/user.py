from pydantic import BaseModel, Field
from typing import Optional, List
from enum import Enum
import uuid

class DifficultyLevel(str, Enum):
    BEGINNER = "beginner"
    ADVANCED = "advanced"

class Language(str, Enum):
    ENGLISH = "en"
    URDU = "ur"

class UserProfile(BaseModel):
    hardware_specs: Optional[str] = None
    python_proficiency: Optional[str] = None
    difficulty: DifficultyLevel = DifficultyLevel.BEGINNER
    language: Language = Language.ENGLISH

class User(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: str
    hashed_password: str
    is_active: bool = True
    profile: UserProfile = Field(default_factory=UserProfile)

class UserCreate(BaseModel):
    email: str
    password: str
    hardware_specs: Optional[str] = None
    python_proficiency: Optional[str] = None

class UserResponse(BaseModel):
    id: str
    email: str
    is_active: bool
    profile: UserProfile
