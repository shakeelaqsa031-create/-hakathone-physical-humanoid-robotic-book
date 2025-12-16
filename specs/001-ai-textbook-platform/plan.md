# Implementation Plan: Interactive AI-Native Textbook

**Branch**: `001-ai-textbook-platform` | **Date**: 2025-12-16 | **Spec**: [link](spec.md)
**Input**: Feature specification from `specs/001-ai-textbook-platform/spec.md`

## Summary

Build an AI-native textbook platform with two distinct components: a Docusaurus-based frontend for modular, localized content, and a FastAPI backend powering a RAG chatbot and user profiling. The system features adaptive content toggles (Beginner/Advanced, Urdu/English), secure auth via Better Auth, and context-aware AI assistance using Qdrant and OpenAI embeddings.

## Technical Context

**Language/Version**: Python 3.11+, Node.js 18+ (React)
**Primary Dependencies**: 
- **Frontend**: Docusaurus 3.x, React, Tailwind CSS
- **Backend**: FastAPI, Better Auth, Qdrant Client, OpenAI SDK, Neon Postgres driver (asyncpg), ChatKit SDK
**Storage**: 
- **Database**: Neon Serverless Postgres (User Profiles)
- **Vector DB**: Qdrant Cloud Free Tier (Embeddings)
**Testing**: Pytest (Backend), Jest (Frontend)
**Target Platform**: Web (Vercel/GitHub Pages for Frontend, Cloud Run/Render for Backend)
**Project Type**: Full-stack Web Application
**Performance Goals**: Chatbot response < 5s (p95), Content toggle < 200ms
**Constraints**: Separation of concerns (Frontend/Backend), Free tier usage (Qdrant/Neon)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Modular Content Structure**: Docusaurus used for content.
- [x] **Secure User Profiling**: Better Auth integrated.
- [x] **Multilingual & Inclusive**: Urdu toggle supported.
- [x] **AI-Native Interactivity**: RAG chatbot with Qdrant/OpenAI.
- [x] **Continuous Delivery & Quality**: CI/CD pipeline planned.
- [x] **Scalable Architecture**: Decoupled Frontend/Backend.

## Project Structure

### Documentation (this feature)

```text
specs/001-ai-textbook-platform/
├── plan.md              # This file
├── spec.md              # User stories & requirements
└── tasks.md             # Implementation tasks
```

### Source Code (repository root)

```text
# Option 2: Web application (Frontend + Backend)
backend/
├── src/
│   ├── api/             # FastAPI routes (chat, sync, profile)
│   ├── core/            # Config, Security, Database
│   ├── models/          # Pydantic models & DB schemas
│   ├── services/        # RAG pipeline, Auth, Chatbot logic
│   └── agents/          # Claude Code/ChatKit agents
└── tests/

frontend/
├── blog/
├── docs/                # Textbook Chapters (MDX)
├── src/
│   ├── components/      # ChatWidget, Toggles
│   ├── css/             # Tailwind/Custom styles
│   ├── contexts/        # UserContext (Profile, Settings)
│   └── pages/
└── docusaurus.config.js
```

**Structure Decision**: Split repository into `frontend/` (Docusaurus) and `backend/` (FastAPI) to ensure strict separation of concerns as requested.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Two root projects | Distinct tech stacks (Node/Python) and deployment targets | Single monolithic repo would complicate build/deploy pipelines and dependency management. |
