
import { BellRing, Palette, CheckCircle2 } from 'lucide-react'
import { useAppContext } from '../context/AppContext'

export default function Settings() {
  const {
    theme,
    toggleTheme,
    notifications,
    toggleNotifications,
  } = useAppContext()

  return (
    <section className="card settings-card">
      <div className="section-heading">
        <div className="section-icon blue">
          <Palette size={21} />
        </div>

        <div>
          <h2>Preferencias</h2>
          <p>Configura tu experiencia</p>
        </div>
      </div>

      <div className="setting-row">
        <div className="setting-icon">
          <Palette size={20} />
        </div>

        <div className="setting-description">
          <strong>Apariencia</strong>
          <p>Cambia entre el tema claro y oscuro</p>
        </div>

        <button
          className={`switch ${theme === 'light' ? 'switch-on' : ''}`}
          onClick={toggleTheme}
          role="switch"
          aria-checked={theme === 'light'}
          aria-label="Cambiar apariencia"
        >
          <span />
        </button>
      </div>

      <div className="setting-row">
        <div className="setting-icon">
          <BellRing size={20} />
        </div>

        <div className="setting-description">
          <strong>Notificaciones</strong>
          <p>Recibe avisos de la aplicación</p>
        </div>

        <button
          className={`switch ${notifications ? 'switch-on' : ''}`}
          onClick={toggleNotifications}
          role="switch"
          aria-checked={notifications}
          aria-label="Cambiar notificaciones"
        >
          <span />
        </button>
      </div>

      <div className="context-notice">
        <CheckCircle2 size={19} />

        <div>
          <strong>Estado global conectado</strong>
          <p>Los cambios se reflejan en los componentes que utilizan el contexto.</p>
        </div>
      </div>
    </section>
  )
}
