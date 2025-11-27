# AI Chatbot Starter – React + Node + Groq (Llama 3)

A clean, modern and fully functional AI chatbot starter template built with **React + Vite**, **Node.js + Express**, and connected to **Groq’s Llama 3** models.

This template is perfect for developers, freelancers and creators who want a fast, easy and professional starting point for building AI-powered apps, assistants, SaaS products or MVPs.
<img width="1585" height="874" alt="Captura de pantalla 2025-11-19 201707" src="https://github.com/user-attachments/assets/dae53b1c-514f-44aa-a4b6-ff27dc393e07" />

---

## ✨ Features

- ⚡ **Full-stack template:** React (frontend) + Node/Express (backend)
- 🤖 **AI-powered replies** using **Groq (Llama 3)**
- 💬 **Realtime chat UI** with a modern, clean interface
- 🔌 Simple API endpoint: `POST /api/chat`
- 🎨 Minimalistic dark UI ready for customization
- 📁 Clean folder structure, easy to understand
- 🔧 `.env` configuration for API keys
- 🚀 Fast development with Vite + Nodemon
- 🧩 Perfect as a base for micro-SaaS projects

---

## 🧱 Tech Stack

**Frontend**
- React  
- Vite  
- Fetch API  

**Backend**
- Node.js  
- Express  
- CORS  
- Groq API (OpenAI-compatible endpoint)

---

## 📂 Project Structure

ai-chatbot-starter/
├── backend/
│ ├── src/
│ │ └── server.js
│ ├── .env.example
│ └── package.json
│
└── frontend/
├── src/
│ ├── App.jsx
│ └── main.jsx
├── index.html
├── vite.config.js
└── package.json

yaml
Copiar código

---

## 🔧 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone YOUR_REPO_URL
cd ai-chatbot-starter
2️⃣ Backend setup
bash
Copiar código
cd backend
npm install
cp .env.example .env
Edit .env and add your Groq API key:

ini
Copiar código
AI_API_KEY=your_groq_api_key
AI_API_BASE_URL=https://api.groq.com/openai/v1
AI_MODEL=llama3-8b-8192
PORT=3000
Start the backend server:

bash
Copiar código
npm run dev
Backend will run at:

arduino
Copiar código
http://localhost:3000
3️⃣ Frontend setup
bash
Copiar código
cd ../frontend
npm install
npm run dev
Frontend will run at:

arduino
Copiar código
http://localhost:5173
🚀 Usage
Start backend (npm run dev)

Start frontend (npm run dev)

Type in the chat and the assistant will respond using Groq’s Llama 3 model

🧠 Customization
You can easily customize:

Chatbot name

Colors, fonts, layout

API model (Llama 3, etc.)

System prompt

UI styling

The project is intentionally simple to extend.

📄 Environment Variables
Variable	Description
AI_API_KEY	Your Groq API Key
AI_API_BASE_URL	Groq API endpoint
AI_MODEL	Model name (default: llama3-8b-8192)
PORT	Backend port

🛠 Future Improvements (optional)
Loading indicator ("typing…")

Message timestamps

Markdown support

System prompt configuration

Chat history persistence

📜 License
This template is provided for personal and commercial use.
Feel free to build your own projects or products on top of it.
