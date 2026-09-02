function InputNumber({
  numeroUsuario,
  setNumeroUsuario,
  comprobarNumero
}) {
  function manejarEnter(event) {
    if (event.key === "Enter") {
      comprobarNumero();
    }
  }

  return (
    <input
      type="number"
      min="1"
      max="100"
      placeholder="Escribe un número"
      value={numeroUsuario}
      onChange={(event) =>
        setNumeroUsuario(event.target.value)
      }
      onKeyDown={manejarEnter}
    />
  );
}

export default InputNumber;