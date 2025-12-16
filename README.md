# Hakathone Physical AI Book

**Mastering Physical AI and Humanoid Robotics**

An interactive, AI-native textbook platform designed to teach Physical AI and Humanoid Robotics. This platform combines structured modular learning with advanced AI capabilities, including personalized content delivery, real-time RAG-powered Q&A, and adaptive learning paths.

## 🚀 Key Features

- **Interactive Modules**: Comprehensive chapters covering ROS 2, Simulation (Gazebo/Isaac), VLA Models, and more.
- **AI-Powered Assistance**:
    - **Contextual RAG Chatbot**: Ask questions about specific paragraphs or the entire book.
    - **Smart Search**: Powered by Qdrant vector database and OpenAI embeddings.
- **Personalized Learning**:
    - **User Profiles**: tailored content based on your hardware (GPU/CPU) and software proficiency.
    - **Adaptive Content**: Toggle between "Beginner" and "Advanced" modes.
    - **Language Support**: Instant switching between English and Urdu.
- **Modern Tech Stack**: Built with a robust separation of concerns using industry-standard tools.

## 📚 Course Modules

1.  **Module 1: Introduction** - Foundations of Physical AI and Humanoid Robotics.
2.  **Module 2: ROS 2** - Mastering the Robot Operating System (ROS 2) for control and communication.
3.  **Module 3: Simulation** - Simulating environments and robots using tools like Gazebo and NVIDIA Isaac.
4.  **Module 4: VLA Models** - Understanding Vision-Language-Action models for embodied intelligence.

## 🛠️ Technology Stack

### Frontend
- **Framework**: [Docusaurus](https://docusaurus.io/) (React-based static site generator)
- **Styling**: Tailwind CSS, Custom CSS
- **Interactivity**: React Components for Chat and Profile management

### Backend
- **API Framework**: [FastAPI](https://fastapi.tiangolo.com/) (Python)
- **Database**: [Neon](https://neon.tech/) (Serverless Postgres) for user data
- **Vector Database**: [Qdrant](https://qdrant.tech/) for RAG knowledge base
- **AI/LLM**: Integration with OpenAI/Claude via LangChain/Custom services
- **Auth**: Better Auth

## 🏁 Getting Started

### Prerequisites
- Node.js (v18+)
- Python (v3.10+)
- Git

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/shakeelaqsa031-create/-hakathone-physical-humanoid-robotic-book.git
    cd "-hakathone-physical-humanoid-robotic-book"
    ```

2.  **Frontend Setup**
    ```bash
    cd frontend
    npm install
    npm start
    ```
    The site will be available at `http://localhost:3000`.

3.  **Backend Setup**
    ```bash
    cd backend
    # Create virtual environment
    python -m venv venv
    # Activate virtual environment (Windows)
    .\venv\Scripts\activate
    # Activate virtual environment (Linux/Mac)
    source venv/bin/activate
    
    pip install -r requirements.txt
    python src/main.py
    ```
    The API will be available at `http://localhost:8000`.

## 🤝 Contribution

Contributions are welcome! Please follow these steps:
1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
