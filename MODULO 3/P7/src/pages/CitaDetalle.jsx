import {
  Link,
  useParams
} from "react-router-dom";

const citas = [
  {
    id: 1,
    paciente: "Ana López",
    doctor: "Dr. Carlos Ramírez",
    especialidad: "Medicina General",
    fecha: "15 de septiembre",
    hora: "10:00 AM",
    consultorio: "Consultorio 4"
  },
  {
    id: 2,
    paciente: "Luis Martínez",
    doctor: "Dra. Sofía Hernández",
    especialidad: "Dermatología",
    fecha: "18 de septiembre",
    hora: "12:30 PM",
    consultorio: "Consultorio 8"
  },
  {
    id: 3,
    paciente: "María García",
    doctor: "Dr. Fernando Torres",
    especialidad: "Cardiología",
    fecha: "21 de septiembre",
    hora: "9:00 AM",
    consultorio: "Consultorio 2"
  }
];

function CitaDetalle() {

  const { id } = useParams();

  const cita = citas.find(
    (item) => item.id === Number(id)
  );

  if (!cita) {
    return (
      <div className="pagina detalle">

        <h1>❌ Cita no encontrada</h1>

        <p>
          No existe una cita con el ID {id}.
        </p>

        <Link
          className="boton"
          to="/citas"
        >
          Volver a citas
        </Link>

      </div>
    );
  }

  return (
    <div className="pagina">

      <h1>🩺 Detalles de la Cita</h1>

      <div className="detalle-card">

        <div className="detalle-fila">
          <span>ID de cita</span>
          <strong>#{cita.id}</strong>
        </div>

        <div className="detalle-fila">
          <span>Paciente</span>
          <strong>{cita.paciente}</strong>
        </div>

        <div className="detalle-fila">
          <span>Doctor</span>
          <strong>{cita.doctor}</strong>
        </div>

        <div className="detalle-fila">
          <span>Especialidad</span>
          <strong>{cita.especialidad}</strong>
        </div>

        <div className="detalle-fila">
          <span>Fecha</span>
          <strong>{cita.fecha}</strong>
        </div>

        <div className="detalle-fila">
          <span>Hora</span>
          <strong>{cita.hora}</strong>
        </div>

        <div className="detalle-fila">
          <span>Consultorio</span>
          <strong>{cita.consultorio}</strong>
        </div>

      </div>

      <Link
        className="boton volver"
        to="/citas"
      >
        ← Volver a citas
      </Link>

    </div>
  );
}

export default CitaDetalle;