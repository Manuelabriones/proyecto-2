
import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Manuela',
    email: 'manuela@example.com',
  })

  const [theme, setTheme] = useState('dark')
  const [notifications, setNotifications] = useState(true)

  function updateName(name) {
    setUser((currentUser) => ({
      ...currentUser,
      name,
    }))
  }

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark'
    )
  }

  function toggleNotifications() {
    setNotifications((current) => !current)
  }

  return (
    <AppContext.Provider
      value={{
        user,
        updateName,
        theme,
        toggleTheme,
        notifications,
        toggleNotifications,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('useAppContext debe usarse dentro de AppProvider')
  }

  return context
}
