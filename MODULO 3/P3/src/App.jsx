import { useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [hora, setHora] = useState(new Date());

  const [nombreTarea, setNombreTarea] = useState("");
  const [horasTarea, setHorasTarea] = useState("");

  const [tareas, setTareas] = useState([
    {
      id: 1,
      nombre: "Estudiar React",
      horas: 2
    },
    {
      id: 2,
      nombre: "Practicar JavaScript",
      horas: 1
    }
  ]);

  // useEffect para actualizar la hora cada segundo
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalo);
    };
  }, []);

  // useMemo para calcular las horas totales
  const totalHoras = useMemo(() => {
    console.log("Calculando horas totales...");

    return tareas.reduce(
      (total, tarea) => total + tarea.horas,
      0
    );
  }, [tareas]);

  function agregarTarea() {
    if (
      nombreTarea.trim() === "" ||
      horasTarea === "" ||
      Number(horasTarea) <= 0
    ) {
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      nombre: nombreTarea.trim(),
      horas: Number(horasTarea)
    };

    setTareas([...tareas, nuevaTarea]);

    setNombreTarea("");
    setHorasTarea("");
  }

  function eliminarTarea(id) {
    const nuevasTareas = tareas.filter(
      tarea => tarea.id !== id
    );

    setTareas(nuevasTareas);
  }

  function limpiarTareas() {
    setTareas([]);
  }

  function manejarEnter(event) {
    if (event.key === "Enter") {
      agregarTarea();
    }
  }

  return (
    <div className="container">

      <h1>⏱️ Contador de Tareas</h1>

      <p className="descripcion">
        Registra tus tareas y controla el tiempo dedicado.
      </p>

      <div className="reloj">
        <p>Hora actual</p>

        <h2>
          {hora.toLocaleTimeString()}
        </h2>
      </div>

      <div className="formulario">

        <input
          type="text"
          placeholder="Nombre de la tarea"
          value={nombreTarea}
          onChange={(event) =>
            setNombreTarea(event.target.value)
          }
          onKeyDown={manejarEnter}
        />

        <input
          type="number"
          placeholder="Horas"
          min="1"
          value={horasTarea}
          onChange={(event) =>
            setHorasTarea(event.target.value)
          }
          onKeyDown={manejarEnter}
        />

        <button onClick={agregarTarea}>
          Agregar tarea
        </button>

      </div>

      <div className="resumen">

        <div className="resumen-item">
          <span>Tareas registradas</span>
          <strong>{tareas.length}</strong>
        </div>

        <div className="resumen-item">
          <span>Horas totales</span>
          <strong>{totalHoras}</strong>
        </div>

      </div>

      <div className="lista">

        {tareas.length === 0 ? (

          <p className="vacia">
            No hay tareas registradas.
          </p>

        ) : (

          tareas.map((tarea) => (

            <div
              className="tarea"
              key={tarea.id}
            >

              <div className="tarea-info">

                <h3>
                  {tarea.nombre}
                </h3>

                <p>
                  Tiempo dedicado: {tarea.horas}{" "}
                  {tarea.horas === 1
                    ? "hora"
                    : "horas"}
                </p>

              </div>

              <button
                className="eliminar"
                onClick={() =>
                  eliminarTarea(tarea.id)
                }
              >
                Eliminar
              </button>

            </div>

          ))

        )}

      </div>

      {tareas.length > 0 && (
        <button
          className="limpiar"
          onClick={limpiarTareas}
        >
          Limpiar todas las tareas
        </button>
      )}

    </div>
  );
}

export default App;