
import { useState } from 'react'
import { UserRound, Mail, Save } from 'lucide-react'
import { useAppContext } from '../context/AppContext'

export default function Profile() {
  const { user, updateName } = useAppContext()
  const [name, setName] = useState(user.name)

  function handleSubmit(event) {
    event.preventDefault()

    const cleanName = name.trim()

    if (cleanName) {
      updateName(cleanName)
    }
  }

  return (
    <section className="card profile-card">
      <div className="section-heading">
        <div className="section-icon purple">
          <UserRound size={21} />
        </div>

        <div>
          <h2>Perfil de usuario</h2>
          <p>Información compartida mediante Context API</p>
        </div>
      </div>

      <div className="profile-summary">
        <div className="large-avatar">
          {user.name.charAt(0).toUpperCase() || '?'}
        </div>

        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <span className="status-badge">Usuario activo</span>
        </div>
      </div>

      <form className="profile-form" onSubmit={handleSubmit}>
        <label htmlFor="user-name">Cambiar nombre</label>

        <div className="input-wrapper">
          <UserRound size={18} />

          <input
            id="user-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Escribe tu nombre"
            maxLength={50}
            required
          />
        </div>

        <div className="input-wrapper email-field">
          <Mail size={18} />
          <input value={user.email} readOnly aria-label="Correo electrónico" />
        </div>

        <button type="submit" className="primary-button">
          <Save size={18} />
          Guardar cambios
        </button>
      </form>
    </section>
  )
}
