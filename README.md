# AI-CHATBOT
CHATBOT
🧩 AI Chatbot Starter
React + Node.js + Groq — Minimal, clean, ready to customize.
Un starter kit sencillo, moderno y totalmente funcional para crear chatbots de IA.
Ideal para aprender, construir proyectos rápidos, o usarlo como base para productos SaaS.

✨ Características


⚡ Frontend en React + Vite


🔧 Backend en Node.js + Express


🤖 Conexión lista para usar con Groq (Llama 3)


🔌 Proxy automático entre frontend y backend


💡 Código limpio, fácil de leer, ideal como plantilla


🎨 Diseño moderno y minimalista


🔐 API keys seguras mediante .env


🚀 Rápido de desplegar en cualquier hosting



🛠️ Tecnologías
ÁreaTecnologíaFrontendReact + ViteBackendNode.js + ExpressIAGroq / Llama 3EstilosCSS mínimo (personalizable)Dev ToolsNodemon, Fetch API

📁 Estructura del proyecto
AI-CHATBOT
├── backend
│   ├── src
│   │   └── server.js
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
└── frontend
    ├── src
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── README.md


🔧 Instalación
1. Clonar este repositorio
git clone https://github.com/tuusuario/AI-CHATBOT.git
cd AI-CHATBOT


▶️ Backend
2. Instalar dependencias
cd backend
npm install

3. Crear archivo .env
cp .env.example .env

Editar .env con tu API key de Groq:
AI_API_KEY=tu_clave_de_groq
AI_API_BASE_URL=https://api.groq.com/openai/v1
AI_MODEL=llama3-8b-8192
PORT=3000

4. Iniciar el servidor
npm run dev

Backend listo en:
👉 http://localhost:3000

💻 Frontend
5. Instalar dependencias
cd ../frontend
npm install

6. Iniciar el proyecto
npm run dev

Frontend en:
👉 http://localhost:5173

🤖 ¿Cómo funciona la IA?
Tu frontend envía un mensaje a:
POST /api/chat

El backend lo envía a Groq (Llama 3)
y devuelve la respuesta al frontend en tiempo real.
Todo está ya configurado automáticamente.

🎨 Personalización
Puedes modificar fácilmente:


✔ Nombre del chatbot


✔ Colores principales


✔ Logo


✔ Mensaje del sistema (la “personalidad” del bot)


✔ Modelo de IA


✔ Estilos del layout


Todo desde App.jsx.

📦 Ideal para vender o reutilizar
Este starter es perfecto si quieres:


Crear tus propios chatbots


Construir MVPs rápidos


Vender plantillas (Gumroad, LemonSqueezy…)


Enseñar IA a otros


Hacer bots personalizados para clientes



📜 Licencia
Uso libre.
Si vas a revender la plantilla, genera una versión final limpia sin tus claves.

⭐ Si te gustó, deja una estrella en GitHub
¡Tu apoyo hace crecer este proyecto! ⭐

✔ README COMPLETO
Esto ya es nivel producto premium.
Cuando lo tengas pegado, dime:
👉 “listo”
Y pasamos al siguiente paso:
crear el ZIP listo para Gumroad o subir a GitHub — tú eliges.