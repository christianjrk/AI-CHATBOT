import React, { useState, useRef, useEffect } from "react";

const appStyles = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  padding: "1.5rem",
  background: "radial-gradient(circle at top, #111827, #020617)"
};

const containerStyles = {
  width: "100%",
  maxWidth: "860px",
  borderRadius: "1.5rem",
  border: "1px solid rgba(148,163,184,0.35)",
  background:
    "linear-gradient(145deg, rgba(15,23,42,0.96), rgba(15,23,42,0.99))",
  boxShadow:
    "0 24px 60px rgba(15,23,42,0.95), 0 0 0 1px rgba(15,23,42,0.9)",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden"
};

const headerStyles = {
  padding: "1.15rem 1.5rem",
  borderBottom: "1px solid rgba(30,64,175,0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background:
    "radial-gradient(circle at top left, rgba(59,130,246,0.4), transparent 55%)"
};

const titleBlockStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem"
};

const titleStyles = {
  fontSize: "0.95rem",
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#e5e7eb"
};

const subtitleStyles = {
  fontSize: "0.8rem",
  color: "#9ca3af"
};

const badgeStyles = {
  fontSize: "0.75rem",
  padding: "0.3rem 0.7rem",
  borderRadius: "999px",
  border: "1px solid rgba(191,219,254,0.7)",
  color: "#dbeafe",
  background:
    "linear-gradient(135deg, rgba(15,23,42,0.9), rgba(37,99,235,0.95))",
  boxShadow: "0 0 25px rgba(59,130,246,0.8)"
};

const chatAreaStyles = {
  flex: 1,
  padding: "1rem 1.25rem",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem"
};

const footerStyles = {
  padding: "0.85rem 1.25rem 1.1rem",
  borderTop: "1px solid rgba(31,41,55,0.95)",
  background:
    "linear-gradient(to top, rgba(15,23,42,0.98), rgba(15,23,42,0.94))"
};

const formStyles = {
  display: "flex",
  gap: "0.75rem",
  alignItems: "flex-end"
};

const inputStyles = {
  flex: 1,
  resize: "none",
  borderRadius: "0.85rem",
  border: "1px solid rgba(55,65,81,0.9)",
  padding: "0.7rem 0.9rem",
  fontSize: "0.9rem",
  backgroundColor: "rgba(15,23,42,0.96)",
  color: "#e5e7eb",
  outline: "none",
  minHeight: "42px"
};

const buttonStyles = (disabled) => ({
  borderRadius: "999px",
  border: "none",
  padding: "0.65rem 1.2rem",
  fontSize: "0.85rem",
  fontWeight: 500,
  cursor: disabled ? "not-allowed" : "pointer",
  opacity: disabled ? 0.6 : 1,
  background:
    "linear-gradient(135deg, rgba(59,130,246,1), rgba(56,189,248,0.9))",
  color: "#e5e7eb",
  boxShadow:
    "0 10px 25px rgba(37,99,235,0.65), 0 0 20px rgba(56,189,248,0.7)",
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
  whiteSpace: "nowrap"
});

const errorTextStyles = {
  fontSize: "0.8rem",
  color: "#fecaca",
  marginBottom: "0.45rem"
};

const helperTextStyles = {
  fontSize: "0.75rem",
  color: "#9ca3af",
  marginTop: "0.4rem"
};

const MessageBubble = ({ role, content }) => {
  const isUser = role === "user";

  const rowStyles = {
    display: "flex",
    justifyContent: isUser ? "flex-end" : "flex-start"
  };

  const bubbleStyles = {
    maxWidth: "80%",
    padding: "0.7rem 0.95rem",
    borderRadius: isUser
      ? "1rem 1rem 0.25rem 1rem"
      : "1rem 1rem 1rem 0.25rem",
    fontSize: "0.9rem",
    lineHeight: 1.5,
    whiteSpace: "pre-wrap",
    backgroundColor: isUser ? "#1d4ed8" : "rgba(15,23,42,0.98)",
    color: "#e5e7eb",
    border: isUser
      ? "1px solid rgba(191,219,254,0.65)"
      : "1px solid rgba(31,41,55,0.95)",
    boxShadow: isUser
      ? "0 12px 30px rgba(37,99,235,0.7)"
      : "0 10px 22px rgba(15,23,42,0.95)"
  };

  const labelStyles = {
    fontSize: "0.7rem",
    marginBottom: "0.25rem",
    color: "rgba(148,163,184,0.9)",
    textAlign: isUser ? "right" : "left"
  };

  return (
    <div style={rowStyles}>
      <div>
        <div style={labelStyles}>{isUser ? "You" : "AI Bot"}</div>
        <div style={bubbleStyles}>{content}</div>
      </div>
    </div>
  );
};

const App = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm your AI Chatbot Starter. Ask me anything to test the connection. 🚀"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    setErrorText("");
    const userMessage = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: trimmed })
      });

      if (!response.ok) {
        let errorMessage = "Error calling backend.";
        try {
          const errorData = await response.json();
          if (errorData?.reply) errorMessage = errorData.reply;
        } catch {
          // ignore JSON error
        }
        setErrorText(errorMessage);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "There was a problem contacting the AI service. Please check the server configuration."
          }
        ]);
      } else {
        const data = await response.json();
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: data.reply || "(Empty response from AI)"
          }
        ]);
      }
    } catch (error) {
      console.error(error);
      setErrorText("Network error. Is the backend running?");
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I couldn't reach the server. Please make sure the backend is running."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={appStyles}>
      <div style={containerStyles}>
        <header style={headerStyles}>
          <div style={titleBlockStyles}>
            <div style={titleStyles}>AI Chatbot Starter</div>
            <div style={subtitleStyles}>
              React + Node template. Plug your API key, rename, ship.
            </div>
          </div>
          <div style={badgeStyles}>Template</div>
        </header>

        <main style={chatAreaStyles}>
          {messages.map((msg, index) => (
            <MessageBubble
              key={index}
              role={msg.role}
              content={msg.content}
            />
          ))}
          {isLoading && (
            <MessageBubble
              role="assistant"
              content="Thinking…"
            />
          )}
          <div ref={chatEndRef} />
        </main>

        <footer style={footerStyles}>
          {errorText && <div style={errorTextStyles}>{errorText}</div>}

          <form style={formStyles} onSubmit={handleSubmit}>
            <textarea
              style={inputStyles}
              rows={1}
              placeholder="Write a message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              style={buttonStyles(isLoading)}
              disabled={isLoading}
            >
              <span>{isLoading ? "Sending..." : "Send"}</span>
              <span>↗</span>
            </button>
          </form>

          <div style={helperTextStyles}>
            This is a generic starter. Change the title, colors and API key to
            make it your own.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
