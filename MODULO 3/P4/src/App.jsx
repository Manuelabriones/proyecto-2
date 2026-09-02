import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Planeta from "./Planeta";

function App() {
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En órbita");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);

  // MONTAJE Y DESMONTAJE
  useEffect(() => {
    console.log("¡El panel de control está listo!");

    const intervalo = setInterval(() => {
      setDistancia((distanciaActual) => distanciaActual + 10);

      setCombustible((combustibleActual) => {
        if (combustibleActual > 0) {
          return combustibleActual - 1;
        }

        return 0;
      });
    }, 1000);

    return () => {
      clearInterval(intervalo);
      console.log("El panel de control se ha apagado.");
    };
  }, []);

  // ACTUALIZACIÓN
  useEffect(() => {
    console.log("¡Combustible actualizado!");

    if (combustible === 0) {
      setEstadoNave("Sin combustible");
    }
  }, [combustible]);

  // USEMEMO
  const mensajeEstado = useMemo(() => {
    console.log("Calculando estado de la nave...");

    return `Estado actual: ${estadoNave}`;
  }, [estadoNave]);

  function aterrizar() {
    if (combustible === 0) {
      return;
    }

    setEstadoNave("Aterrizando");

    const numeroPlaneta = planetasVisitados.length + 1;

    const nuevoPlaneta = `Planeta ${numeroPlaneta}`;

    setPlanetasVisitados([
      ...planetasVisitados,
      nuevoPlaneta
    ]);

    setTimeout(() => {
      setEstadoNave("En órbita");
    }, 2000);
  }

  function reiniciarViaje() {
    setDistancia(0);
    setCombustible(100);
    setEstadoNave("En órbita");
    setPlanetasVisitados([]);
  }

  return (
    <div className="container">
      <h1>🚀 El Viaje del Explorador Espacial</h1>

      <p className="subtitulo">
        Panel de control de la nave
      </p>

      <div className="estado">
        <h2>{mensajeEstado}</h2>
      </div>

      <div className="datos">
        <div className="tarjeta">
          <span>🌌 Distancia</span>
          <strong>{distancia} km</strong>
        </div>

        <div className="tarjeta">
          <span>⛽ Combustible</span>
          <strong>{combustible}%</strong>
        </div>

        <div className="tarjeta">
          <span>🪐 Planetas</span>
          <strong>{planetasVisitados.length}</strong>
        </div>
      </div>

      <div className="barra-container">
        <p>Combustible disponible</p>

        <div className="barra">
          <div
            className="nivel"
            style={{ width: `${combustible}%` }}
          ></div>
        </div>
      </div>

      <div className="botones">
        <button
          onClick={aterrizar}
          disabled={combustible === 0}
        >
          🛬 Aterrizar
        </button>

        <button
          className="reiniciar"
          onClick={reiniciarViaje}
        >
          🔄 Reiniciar viaje
        </button>
      </div>

      <section className="planetas">
        <h2>Planetas visitados</h2>

        {planetasVisitados.length === 0 ? (
          <p className="vacio">
            Todavía no has visitado ningún planeta.
          </p>
        ) : (
          <div className="lista-planetas">
            {planetasVisitados.map((planeta, index) => (
              <Planeta
                key={`${planeta}-${index}`}
                nombre={planeta}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;