
import { useState } from 'react'

export function useChat() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function sendMessage(text) {
    const question = text.trim()

    if (!question || loading) return

    const updatedMessages = [
      ...messages,
      { role: 'user', content: question },
    ]

    setMessages(updatedMessages)
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'deepseek-r1:1.5b',
          messages: updatedMessages,
          stream: false,
        }),
      })

      if (!response.ok) {
        throw new Error('No se pudo conectar con Ollama.')
      }

      const data = await response.json()

      setMessages([
        ...updatedMessages,
        {
          role: 'assistant',
          content: data.message.content,
        },
      ])
    } catch (err) {
      setError(
        'No se pudo obtener una respuesta. Comprueba que Ollama esté funcionando.'
      )
    } finally {
      setLoading(false)
    }
  }

  function clearChat() {
    setMessages([])
    setError('')
  }

  return {
    messages,
    loading,
    error,
    sendMessage,
    clearChat,
  }
}
