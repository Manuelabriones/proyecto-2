
import { useState } from 'react'
import { Menu, Plus, Send, MessageSquare, Trash2, Bot, User, PanelLeftClose } from 'lucide-react'
import { useChat } from './hooks/useChat'
import './App.css'

function App() {
  const { messages, loading, error, sendMessage, clearChat } = useChat()
  const [input, setInput] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  async function handleSubmit(e) {
    e.preventDefault()

    if (!input.trim() || loading) return

    const text = input
    setInput('')
    await sendMessage(text)
  }

  function handleNewChat() {
    clearChat()
    setInput('')
  }

  return (
    <div className="app">
      <aside className={`sidebar ${sidebarOpen ? '' : 'sidebar-closed'}`}>
        <div className="sidebar-top">
          <button
            className="icon-button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            title="Mostrar u ocultar menú"
          >
            <PanelLeftClose size={21} />
          </button>

          <button className="icon-button" onClick={handleNewChat} title="Nuevo chat">
            <Plus size={22} />
          </button>
        </div>

        <button className="new-chat-button" onClick={handleNewChat}>
          <Plus size={19} />
          <span>Nuevo chat</span>
        </button>

        <div className="history-title">Tus conversaciones</div>

        {messages.length > 0 && (
          <button className="history-item" title="Conversación actual">
            <MessageSquare size={17} />
            <span>{messages.find((m) => m.role === 'user')?.content.slice(0, 25)}</span>
          </button>
        )}

        <div className="sidebar-bottom">
          <div className="model-status">
            <span className="status-dot" />
            <div>
              <strong>DeepSeek R1</strong>
              <small>Modelo local · Ollama</small>
            </div>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <button
            className="icon-button mobile-menu"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu size={22} />
          </button>

          <div className="brand">
            <div className="brand-icon"><Bot size={23} /></div>
            <span>DeepChat</span>
            <span className="model-badge">1.5B</span>
          </div>

          <div className="local-label">● IA local</div>
        </header>

        <section className={`chat-area ${messages.length === 0 ? 'empty-chat' : ''}`}>
          {messages.length === 0 ? (
            <div className="welcome">
              <div className="welcome-icon"><Bot size={35} /></div>
              <h1>¿En qué puedo ayudarte?</h1>
              <p>Pregunta lo que quieras. Tu asistente funciona localmente con DeepSeek R1.</p>

              <div className="suggestions">
                <button onClick={() => setInput('Explícame qué es React con un ejemplo')}>
                  <span>💻</span>
                  <strong>Aprender programación</strong>
                  <small>Explícame React con un ejemplo</small>
                </button>

                <button onClick={() => setInput('Ayúdame a crear una página web moderna')}>
                  <span>🎨</span>
                  <strong>Crear una página web</strong>
                  <small>Diseño moderno con React</small>
                </button>

                <button onClick={() => setInput('Dame ideas para un proyecto de inteligencia artificial')}>
                  <span>🧠</span>
                  <strong>Explorar ideas</strong>
                  <small>Proyectos de inteligencia artificial</small>
                </button>
              </div>
            </div>
          ) : (
            <div className="messages">
              {messages.map((message, index) => (
                <article className={`message ${message.role}`} key={index}>
                  <div className="message-avatar">
                    {message.role === 'user' ? <User size={19} /> : <Bot size={20} />}
                  </div>
                  <div className="message-content">
                    <strong>{message.role === 'user' ? 'Tú' : 'DeepSeek'}</strong>
                    <p>{message.content}</p>
                  </div>
                </article>
              ))}

              {loading && (
                <div className="loading-message">
                  <Bot size={20} />
                  <span>DeepSeek está pensando...</span>
                  <span className="loading-dots">•••</span>
                </div>
              )}

              <div className="messages-end" />
            </div>
          )}
        </section>

        <footer className="composer-container">
          {error && <div className="error-message">{error}</div>}

          <form className="composer" onSubmit={handleSubmit}>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  handleSubmit(e)
                }
              }}
              placeholder="Escribe tu mensaje a DeepSeek..."
              rows={1}
              aria-label="Escribe tu mensaje"
            />

            <button
              type="submit"
              className="send-button"
              disabled={!input.trim() || loading}
              title="Enviar mensaje"
            >
              <Send size={19} />
            </button>
          </form>

          <p className="disclaimer">
            DeepChat puede cometer errores. Las respuestas se generan en tu equipo con Ollama.
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
