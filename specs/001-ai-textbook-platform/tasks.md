---
description: "Task list for Interactive AI-Native Textbook"
---

# Tasks: Interactive AI-Native Textbook

**Input**: Design documents from `specs/001-ai-textbook-platform/`
**Prerequisites**: plan.md, spec.md

**Tests**: Optional (only included where critical for logic verification).

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel
- **[Story]**: US1 (Onboarding), US2 (Adaptive), US3 (Context RAG), US4 (Global RAG)

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize the split repository structure and base projects.

- [x] T001 Create root directory structure for `frontend/` and `backend/`
- [x] T002 Initialize Docusaurus project in `frontend/` with classic preset
- [x] T003 Initialize FastAPI project in `backend/` with `pyproject.toml`
- [x] T004 [P] Configure Tailwind CSS for Docusaurus in `frontend/`
- [x] T005 [P] Setup environment variables (`.env`) for Backend (Neon, Qdrant, OpenAI keys)

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core data models, auth infrastructure, and content baseline.

**⚠️ CRITICAL**: Must complete before user stories.

- [x] T006 Setup Neon Postgres connection and SQLAlchemy/SQLModel in `backend/src/core/database.py`
- [x] T007 Setup Qdrant client connection in `backend/src/core/vector_db.py`
- [x] T008 Implement Better Auth (or equivalent OAuth) base logic in `backend/src/core/auth.py`
- [x] T009 Create initial MDX content for "Module 1: Modern AI Engineering" in `frontend/docs/module-1.mdx` (No Lorem Ipsum)
- [x] T010 Create `backend/src/models/user.py` with User and Profile schemas (Hardware/Software preferences)

## Phase 3: User Story 1 - Learner Onboarding & Profiling (Priority: P1)

**Goal**: Users can sign up and save their hardware/software preferences.
**Independent Test**: Create account -> Submit Profile -> Verify DB record.

- [x] T011 [US1] Create API endpoint `POST /api/auth/register` in `backend/src/api/auth_routes.py`
- [x] T012 [US1] Create API endpoint `POST /api/profile` to save user preferences in `backend/src/api/profile_routes.py`
- [x] T013 [US1] Create API endpoint `GET /api/profile` to fetch preferences in `backend/src/api/profile_routes.py`
- [x] T014 [US1] Create React Context `UserContext` in `frontend/src/contexts/UserContext.js` to manage auth state
- [x] T015 [US1] Create "Profile Setup" form component in `frontend/src/components/ProfileForm.js`
- [x] T016 [US1] Integrate Auth/Profile API calls into `frontend/src/pages/signup.js`

## Phase 4: User Story 2 - Adaptive Reading Experience (Priority: P2)

**Goal**: Toggle content difficulty and language.
**Independent Test**: Toggle switch changes text content immediately.

- [x] T017 [US2] Update `UserContext` to store `difficulty` (beginner/advanced) and `language` (en/ur) state
- [x] T018 [US2] Create `NavbarToggle` component in `frontend/src/components/NavbarToggle.js` for settings
- [x] T019 [US2] Create `<AdaptiveContent>` MDX component in `frontend/src/components/AdaptiveContent.js`
- [x] T020 [US2] Implement Urdu translation logic (e.g., json-based or parallel MDX) in `frontend/src/utils/i18n.js`
- [x] T021 [US2] Update Module 1 MDX content to use `<AdaptiveContent>` tags for beginner/advanced sections

## Phase 5: User Story 3 - Contextual AI Assistance (RAG) (Priority: P2)

**Goal**: Ask questions about specific selected text.
**Independent Test**: Highlight text -> Ask "Explain" -> Bot uses text in context.

- [x] T022 [US3] Create `ChatWidget` floating component in `frontend/src/components/ChatWidget.js`
- [x] T023 [US3] Implement `window.getSelection()` logic in `ChatWidget` to capture highlighted text
- [x] T024 [US3] Setup `backend/src/services/rag_service.py` to handle context injection
- [x] T025 [US3] Implement `POST /api/chat` endpoint in `backend/src/api/chat_routes.py` receiving `{query, context, user_level}`
- [x] T026 [US3] Integrate OpenAI/Claude SDK in `backend/src/services/llm_service.py` to generate answers
- [x] T027 [US3] Connect Frontend ChatWidget to Backend Chat API

## Phase 6: User Story 4 - Global Knowledge Search (Priority: P3)

**Goal**: Query the entire book corpus.
**Independent Test**: Ask about Chapter 5 from Chapter 1 -> Bot retrieves Chapter 5 info.

- [ ] T028 [US4] Implement Markdown parsing and chunking utility in `backend/src/services/ingestion.py`
- [ ] T029 [US4] Create `POST /api/sync` endpoint to trigger embedding generation for all docs
- [ ] T030 [US4] Implement Qdrant vector search logic in `backend/src/services/rag_service.py`
- [ ] T031 [US4] Update `POST /api/chat` to perform vector search if no direct context is provided
- [ ] T032 [US4] Run ingestion for Module 1 content and verify embeddings in Qdrant

## Phase 7: Polish & DevOps

**Purpose**: Automation and refinement.

- [ ] T033 Setup GitHub Actions workflow `.github/workflows/deploy.yml` for Frontend build
- [ ] T034 Setup GitHub Actions workflow for Backend Docker build
- [ ] T035 Create script `scripts/sync_embeddings.py` for CI/CD embedding updates
- [ ] T036 Refine CSS styling for Chat Widget and Toggles (Mobile responsiveness)
- [ ] T037 Add error handling and loading states to all Frontend API calls

## Dependencies

- **Setup (Phase 1)**: Start immediately.
- **Foundational (Phase 2)**: Depends on Phase 1. Blocks all stories.
- **US1 (Onboarding)**: Depends on Foundational (Models, Auth).
- **US2 (Adaptive)**: Depends on Foundational (Content). Independent of US1 (can mock user state).
- **US3 (Context RAG)**: Depends on Foundational (LLM Service). Independent of US2.
- **US4 (Global RAG)**: Depends on US3 (Chat API) and Foundational (Vector DB).

## Implementation Strategy

1. **MVP**: Complete Phases 1, 2, and 3 (Onboarding).
2. **Interactive Alpha**: Add Phase 4 (Adaptive) and 5 (Context RAG).
3. **Beta**: Add Phase 6 (Global RAG) and 7 (DevOps).
