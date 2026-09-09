import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (username.trim() === "") {
      return;
    }

    onLogin(username.trim());
    navigate("/");
  }

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="logo">
          𝕏
        </div>

        <h1>Iniciar sesión</h1>

        <p>
          Ingresa tu nombre de usuario para continuar.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(event) =>
              setUsername(event.target.value)
            }
          />

          <button type="submit">
            Iniciar sesión
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;