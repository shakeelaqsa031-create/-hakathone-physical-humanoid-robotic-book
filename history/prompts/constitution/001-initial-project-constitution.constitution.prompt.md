---
id: 001
title: Initial Project Constitution
stage: constitution
date: 2025-12-16
surface: agent
model: gemini-2.0-flash-exp
feature: none
branch: main
user: user
command: /sp.constitution
labels: ["setup", "governance", "principles"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
  - none
---

## Prompt

/sp.constitution
Project: Physical AI & Humanoid Robotics Textbook Hackathon

Mission:
Create an AI-native, spec-driven textbook platform integrating a modular book with personalized, multilingual content and an embedded RAG chatbot answering questions from both full content and user-selected text.

Principles:
- Modular Docusaurus-based textbook with chapters as markdown files.
- Secure user auth & profiling via Better Auth to personalize content by hardware/software background.
- Multilingual support with on-demand Urdu translation toggle.
- RAG chatbot built on OpenAI Agents/ChatKit, backed by FastAPI, Neon Serverless Postgres, and Qdrant vector DB.
- Full CI/CD with embedding updates, testing, and deployment.
- Scalable architecture supporting future subagents and skills for reusability.

## Response snapshot

Updated constitution to v1.0.0 with 6 core principles:
1. Modular Content Structure (Docusaurus/Markdown)
2. Secure User Profiling (Better Auth)
3. Multilingual & Inclusive (Urdu support)
4. AI-Native Interactivity (RAG w/ OpenAI/Neon/Qdrant)
5. Continuous Delivery & Quality (CI/CD)
6. Scalable Architecture

Governance set to v1.0.0, ratified 2025-12-16.

## Outcome

- ✅ Impact: Constitution established with clear principles and governance.
- 🧪 Tests: N/A
- 📁 Files: Updated .specify/memory/constitution.md
- 🔁 Next prompts: /sp.plan, /sp.spec
- 🧠 Reflection: Initial setup completed successfully. Principles align with modern AI-native app requirements.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): default
- Next experiment (smallest change to try): none
