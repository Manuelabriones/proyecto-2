
import { ShieldCheck, Zap, Layers3 } from 'lucide-react'
import Header from './components/Header'
import Profile from './components/Profile'
import Settings from './components/Settings'
import { useAppContext } from './context/AppContext'
import './App.css'

function AppContent() {
  const { user, theme, notifications } = useAppContext()

  return (
    <div className={`app-shell ${theme}`}>
      <Header />

      <main className="dashboard">
        <section className="welcome-banner">
          <div>
            <span className="eyebrow">REACT · CONTEXT API</span>
            <h2>¡Hola, {user.name}!</h2>
            <p>
              Administra tus preferencias desde un solo lugar.
              Los componentes comparten información con useContext.
            </p>
          </div>

          <div className="banner-icon">
            <Layers3 size={42} />
          </div>
        </section>

        <section className="stats-grid">
          <article className="stat-card">
            <div className="stat-icon purple">
              <Layers3 size={21} />
            </div>
            <span>Gestión del estado</span>
            <strong>Context API</strong>
            <small>Un contexto compartido</small>
          </article>

          <article className="stat-card">
            <div className="stat-icon green">
              <Zap size={21} />
            </div>
            <span>Actualización</span>
            <strong>En tiempo real</strong>
            <small>Sin prop drilling</small>
          </article>

          <article className="stat-card">
            <div className="stat-icon blue">
              <ShieldCheck size={21} />
            </div>
            <span>Notificaciones</span>
            <strong>{notifications ? 'Activadas' : 'Desactivadas'}</strong>
            <small>Preferencia global</small>
          </article>
        </section>

        <section className="content-grid">
          <Profile />
          <Settings />
        </section>

        <footer className="footer">
          <span>Context Hub</span>
          <span>Proyecto académico · React y Vite</span>
        </footer>
      </main>
    </div>
  )
}

export default function App() {
  return <AppContent />
}
