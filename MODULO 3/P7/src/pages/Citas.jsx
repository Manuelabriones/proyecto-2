import { Link } from "react-router-dom";

const citas = [
  {
    id: 1,
    paciente: "Ana López",
    doctor: "Dr. Carlos Ramírez",
    especialidad: "Medicina General",
    fecha: "15 de septiembre",
    hora: "10:00 AM"
  },
  {
    id: 2,
    paciente: "Luis Martínez",
    doctor: "Dra. Sofía Hernández",
    especialidad: "Dermatología",
    fecha: "18 de septiembre",
    hora: "12:30 PM"
  },
  {
    id: 3,
    paciente: "María García",
    doctor: "Dr. Fernando Torres",
    especialidad: "Cardiología",
    fecha: "21 de septiembre",
    hora: "9:00 AM"
  }
];

function Citas() {
  return (
    <div className="pagina">

      <h1>📅 Citas Médicas</h1>

      <p className="subtitulo">
        Consulta las citas registradas.
      </p>

      <div className="lista-citas">

        {citas.map((cita) => (

          <div
            className="cita-card"
            key={cita.id}
          >

            <div>

              <span className="numero">
                Cita #{cita.id}
              </span>

              <h2>
                {cita.paciente}
              </h2>

              <p>
                👨‍⚕️ {cita.doctor}
              </p>

              <p>
                🩺 {cita.especialidad}
              </p>

              <p>
                📅 {cita.fecha}
              </p>

              <p>
                ⏰ {cita.hora}
              </p>

            </div>

            <Link
              className="boton"
              to={`/cita/${cita.id}`}
            >
              Ver detalles
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Citas;