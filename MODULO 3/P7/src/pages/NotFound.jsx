import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="pagina not-found">

      <div className="error-numero">
        404
      </div>

      <h1>Página no encontrada</h1>

      <p>
        La página que intentas visitar no existe.
      </p>

      <Link
        className="boton"
        to="/"
      >
        Volver al inicio
      </Link>

    </div>
  );
}

export default NotFound;