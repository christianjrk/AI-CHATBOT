import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

const API_KEY = process.env.AI_API_KEY;
const MODEL = process.env.AI_MODEL || "llama3-8b-chat";
const BASE_URL =
  process.env.AI_API_BASE_URL || "https://api.groq.com/openai/v1";

if (!API_KEY) {
  console.warn("[WARN] AI_API_KEY no está configurada en el .env");
}

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res
        .status(400)
        .json({ reply: "Falta el campo 'message' en el cuerpo." });
    }

    if (!API_KEY) {
      return res.status(500).json({
        reply:
          "El servidor no tiene AI_API_KEY configurada. Revisa el archivo .env."
      });
    }

    const response = await fetch(`${BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "system", content: "You are a helpful AI assistant." },
          { role: "user", content: message }
        ],
        temperature: 0.7
      })
    });

    const data = await response.json();

    const reply =
      data?.choices?.[0]?.message?.content || "Sin respuesta del modelo.";

    res.json({ reply });
  } catch (error) {
    console.error("Error en /api/chat:", error);
    res.status(500).json({ reply: "Error en el servidor." });
  }
});

app.listen(PORT, () => {
  console.log(`🔥 Backend listo en http://localhost:${PORT}`);
});
