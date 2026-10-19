
import { LayoutDashboard, Sun, Moon, Bell } from 'lucide-react'
import { useAppContext } from '../context/AppContext'

export default function Header() {
  const {
    user,
    theme,
    toggleTheme,
    notifications,
    toggleNotifications,
  } = useAppContext()

  return (
    <header className="header">
      <div className="brand">
        <div className="brand-icon">
          <LayoutDashboard size={22} />
        </div>

        <div>
          <h1>Context Hub</h1>
          <p>Panel de administración</p>
        </div>
      </div>

      <div className="header-actions">
        <button
          className={`icon-button ${notifications ? 'active' : ''}`}
          onClick={toggleNotifications}
          title="Activar o desactivar notificaciones"
          aria-label="Cambiar notificaciones"
        >
          <Bell size={19} />
          {notifications && <span className="notification-dot" />}
        </button>

        <button
          className="theme-button"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          <span>{theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}</span>
        </button>

        <div className="user-avatar">
          {user.name.charAt(0).toUpperCase() || '?'}
        </div>
      </div>
    </header>
  )
}
