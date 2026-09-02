import { useState } from "react";
import InputNumber from "./InputNumber";
import Message from "./Message";
import RestartButton from "./RestartButton";

function generarNumero() {
  return Math.floor(Math.random() * 100) + 1;
}

function Game() {
  const [numeroSecreto, setNumeroSecreto] = useState(generarNumero());
  const [numeroUsuario, setNumeroUsuario] = useState("");
  const [mensaje, setMensaje] = useState(
    "Escribe un número entre 1 y 100."
  );
  const [ganador, setGanador] = useState(false);
  const [intentos, setIntentos] = useState(0);

  function comprobarNumero() {
    const numero = Number(numeroUsuario);

    if (
      numeroUsuario === "" ||
      numero < 1 ||
      numero > 100
    ) {
      setMensaje("Ingresa un número válido entre 1 y 100.");
      return;
    }

    setIntentos(intentos + 1);

    if (numero === numeroSecreto) {
      setMensaje("🎉 ¡Correcto! Adivinaste el número.");
      setGanador(true);
    } else if (numero < numeroSecreto) {
      setMensaje("⬆️ El número secreto es mayor.");
    } else {
      setMensaje("⬇️ El número secreto es menor.");
    }

    setNumeroUsuario("");
  }

  function reiniciarJuego() {
    setNumeroSecreto(generarNumero());
    setNumeroUsuario("");
    setMensaje("Escribe un número entre 1 y 100.");
    setGanador(false);
    setIntentos(0);
  }

  return (
    <div className="game">
      <h1>🎯 Adivina el Número</h1>

      <p className="descripcion">
        Intenta adivinar el número secreto entre 1 y 100.
      </p>

      <div className="contador">
        Intentos: <strong>{intentos}</strong>
      </div>

      {!ganador ? (
        <>
          <InputNumber
            numeroUsuario={numeroUsuario}
            setNumeroUsuario={setNumeroUsuario}
            comprobarNumero={comprobarNumero}
          />

          <button
            className="comprobar"
            onClick={comprobarNumero}
          >
            Comprobar
          </button>
        </>
      ) : (
        <div className="ganador">
          🏆 ¡Ganaste!
        </div>
      )}

      <Message
        mensaje={mensaje}
        ganador={ganador}
      />

      <RestartButton
        reiniciarJuego={reiniciarJuego}
      />
    </div>
  );
}

export default Game;