---
id: 002
title: Feature Spec Interactive AI Textbook
stage: spec
date: 2025-12-16
surface: agent
model: gemini-2.0-flash-exp
feature: ai-textbook-platform
branch: 001-ai-textbook-platform
user: user
command: /sp.specify
labels: ["feature", "spec", "setup"]
links:
  spec: specs/001-ai-textbook-platform/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-ai-textbook-platform/spec.md
  - specs/001-ai-textbook-platform/checklists/requirements.md
tests:
  - none
---

## Prompt

/sp.specify
Goal: Build an interactive AI-native textbook for Physical AI & Humanoid Robotics course with: - Modular chapters covering ROS 2, Gazebo, NVIDIA Isaac, VLA, and more. - User signup/signin with background data collection for personalized content delivery. - Chapter-level toggles for personalization (e.g. beginner/advanced) and Urdu translation. - Embedded RAG chatbot answering user questions using: • Selected text context • Full book corpus indexed in Qdrant with OpenAI embeddings - Data storage: • User profiles and preferences in Neon Serverless Postgres • Vector embeddings in Qdrant Cloud Free Tier - Frontend hosted on GitHub Pages or Vercel - Backend APIs with FastAPI secured by Better Auth - AI agents implemented via Claude Code with ChatKit SDK integration

## Response snapshot

Created feature spec for "Interactive AI-Native Textbook" (001-ai-textbook-platform).
Defined 4 core user stories:
1. Learner Onboarding (Profile creation)
2. Adaptive Reading (Toggles for Level/Language)
3. Contextual AI Assistance (Selected Text RAG)
4. Global Knowledge Search (Full Corpus RAG)

Validated against quality checklist:
- Functional Requirements are tech-agnostic (tech stack moved to Assumptions).
- Success Criteria defined (e.g., Chat < 5s).
- Edge cases identified.

## Outcome

- ✅ Impact: Feature specification created and validated.
- 🧪 Tests: Checklist passed.
- 📁 Files: specs/001-ai-textbook-platform/spec.md, requirements.md
- 🔁 Next prompts: /sp.plan
- 🧠 Reflection: User provided very specific tech stack details. Ensured spec remained functional while capturing constraints in Assumptions.

## Evaluation notes (flywheel)

- Failure modes observed: Script 'create-new-feature.ps1' failed due to path/arg issues. Fell back to manual file creation.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): default
- Next experiment (smallest change to try): Fix create-new-feature.ps1 argument parsing.
