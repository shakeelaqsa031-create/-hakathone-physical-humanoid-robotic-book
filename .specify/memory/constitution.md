<!--
SYNC IMPACT REPORT
Version change: None → 1.0.0
Modified Principles: Initial definition of all principles.
Added Sections: All project-specific principles.
Templates requiring updates: None (Templates are generic).
Follow-up TODOs: None.
-->

# Physical AI & Humanoid Robotics Textbook Hackathon Constitution

## Core Principles

### I. Modular Content Structure
The textbook MUST be built as a modular Docusaurus site with chapters defined as standard Markdown files. Content structure MUST separate raw text from interactive components to enable easy updates, scalability, and clean integration with the RAG system.

### II. Secure User Profiling
Authentication and user profiling MUST be handled via Better Auth. The system MUST adapt content presentation based on the user's hardware and software background profile, ensuring a personalized learning experience.

### III. Multilingual & Inclusive
The platform MUST support multiple languages from the start, specifically featuring an on-demand Urdu translation toggle. Accessibility and localization are core requirements, not afterthoughts, ensuring the content reaches a global audience.

### IV. AI-Native Interactivity
A RAG chatbot (built on OpenAI Agents/ChatKit, FastAPI, Neon Serverless Postgres, and Qdrant vector DB) MUST be embedded. It MUST be capable of answering questions from both the full content corpus and specific user-selected text excerpts.

### V. Continuous Delivery & Quality
Full CI/CD pipelines are mandatory for embedding updates, testing, and deployment. There MUST be no manual deployment steps for core content or code. All changes must pass automated verification before merging.

### VI. Scalable Architecture
System design MUST support future subagents and skills. Components MUST be loosely coupled to allow independent evolution of the AI agents and the content platform, facilitating reusability and future expansion.

## Governance

### Amendment Process
Amendments to this constitution require a Pull Request with a clear rationale and consensus from the project maintainers. Changes to "NON-NEGOTIABLE" principles (like CI/CD or User Safety if added) require unanimous agreement.

### Versioning
This constitution follows Semantic Versioning:
- **MAJOR**: Backward incompatible governance/principle removals or redefinitions.
- **MINOR**: New principle/section added or materially expanded guidance.
- **PATCH**: Clarifications, wording, typo fixes, non-semantic refinements.

### Compliance
All architectural decisions, plans (`/sp.plan`), and specifications (`/sp.spec`) MUST explicitly reference and comply with these principles. Non-compliant proposals must be rejected or require a constitutional amendment.

**Version**: 1.0.0 | **Ratified**: 2025-12-16 | **Last Amended**: 2025-12-16