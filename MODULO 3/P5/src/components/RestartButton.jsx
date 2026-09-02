function RestartButton({ reiniciarJuego }) {
  return (
    <button
      className="reiniciar"
      onClick={reiniciarJuego}
    >
      🔄 Reiniciar juego
    </button>
  );
}

export default RestartButton;