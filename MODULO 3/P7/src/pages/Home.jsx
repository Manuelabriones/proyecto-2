import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="pagina">

      <div className="hero">

        <span className="icono">🩺</span>

        <h1>
          Plataforma de Citas Médicas
        </h1>

        <p>
          Consulta y administra tus citas médicas
          de forma rápida y sencilla.
        </p>

        <Link
          className="boton"
          to="/citas"
        >
          Ver mis citas
        </Link>

      </div>

      <div className="beneficios">

        <div className="card">
          <span>📅</span>
          <h3>Organiza tus citas</h3>
          <p>
            Consulta fácilmente tus próximas
            consultas médicas.
          </p>
        </div>

        <div className="card">
          <span>👨‍⚕️</span>
          <h3>Doctores</h3>
          <p>
            Consulta información de cada
            especialista.
          </p>
        </div>

        <div className="card">
          <span>⏰</span>
          <h3>Horarios</h3>
          <p>
            Mantén organizada la fecha y hora
            de cada cita.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Home;