import {
  Link,
  useNavigate
} from "react-router-dom";

function Profile({ user, logout }) {
  const navigate = useNavigate();

  function cerrarSesion() {
    logout();
    navigate("/login");
  }

  return (
    <div className="profile-page">

      <div className="profile-card">

        <Link
          className="volver"
          to="/"
        >
          ← Volver
        </Link>

        <div className="profile-header">

          <div className="profile-avatar">
            {user.username
              .charAt(0)
              .toUpperCase()}
          </div>

        </div>

        <div className="profile-info">

          <h1>
            {user.username}
          </h1>

          <p className="username">
            @{user.username.toLowerCase()}
          </p>

          <p>
            Usuario registrado en el clon de Twitter.
          </p>

          <div className="datos">

            <div>
              <strong>0</strong>
              <span>Siguiendo</span>
            </div>

            <div>
              <strong>0</strong>
              <span>Seguidores</span>
            </div>

          </div>

          <button
            className="logout"
            onClick={cerrarSesion}
          >
            Cerrar sesión
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;