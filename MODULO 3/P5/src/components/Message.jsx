function Message({ mensaje, ganador }) {
  return (
    <div
      className={
        ganador
          ? "mensaje mensaje-correcto"
          : "mensaje"
      }
    >
      {mensaje}
    </div>
  );
}

export default Message;