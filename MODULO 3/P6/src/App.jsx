import {
  useCallback,
  useReducer,
  useRef
} from "react";

import "./App.css";

const inventarioInicial = [
  {
    id: 1,
    nombre: "Laptop",
    cantidad: 5
  },
  {
    id: 2,
    nombre: "Mouse",
    cantidad: 10
  },
  {
    id: 3,
    nombre: "Teclado",
    cantidad: 7
  }
];

function inventarioReducer(state, action) {
  switch (action.type) {

    case "AGREGAR_PRODUCTO":
      return [
        ...state,
        {
          id: Date.now(),
          nombre: action.payload,
          cantidad: 1
        }
      ];

    case "AUMENTAR":
      return state.map((producto) =>
        producto.id === action.payload
          ? {
              ...producto,
              cantidad: producto.cantidad + 1
            }
          : producto
      );

    case "DISMINUIR":
      return state.map((producto) =>
        producto.id === action.payload
          ? {
              ...producto,
              cantidad:
                producto.cantidad > 0
                  ? producto.cantidad - 1
                  : 0
            }
          : producto
      );

    case "ELIMINAR":
      return state.filter(
        (producto) =>
          producto.id !== action.payload
      );

    case "REINICIAR":
      return inventarioInicial;

    default:
      return state;
  }
}

function App() {
  const [inventario, dispatch] = useReducer(
    inventarioReducer,
    inventarioInicial
  );

  const inputRef = useRef(null);

  const agregarProducto = useCallback(() => {
    const nombre = inputRef.current.value.trim();

    if (nombre === "") {
      inputRef.current.focus();
      return;
    }

    dispatch({
      type: "AGREGAR_PRODUCTO",
      payload: nombre
    });

    inputRef.current.value = "";
    inputRef.current.focus();
  }, []);

  const aumentarCantidad = useCallback((id) => {
    dispatch({
      type: "AUMENTAR",
      payload: id
    });
  }, []);

  const disminuirCantidad = useCallback((id) => {
    dispatch({
      type: "DISMINUIR",
      payload: id
    });
  }, []);

  const eliminarProducto = useCallback((id) => {
    dispatch({
      type: "ELIMINAR",
      payload: id
    });
  }, []);

  function manejarEnter(event) {
    if (event.key === "Enter") {
      agregarProducto();
    }
  }

  return (
    <div className="container">

      <h1>📦 Gestor de Inventario</h1>

      <p className="descripcion">
        Administra los productos y cantidades disponibles.
      </p>

      <div className="formulario">

        <input
          ref={inputRef}
          type="text"
          placeholder="Nombre del producto"
          onKeyDown={manejarEnter}
        />

        <button
          className="agregar"
          onClick={agregarProducto}
        >
          ➕ Agregar
        </button>

      </div>

      <div className="resumen">

        <div className="resumen-item">
          <span>Productos diferentes</span>
          <strong>{inventario.length}</strong>
        </div>

        <div className="resumen-item">
          <span>Unidades totales</span>

          <strong>
            {inventario.reduce(
              (total, producto) =>
                total + producto.cantidad,
              0
            )}
          </strong>
        </div>

      </div>

      <div className="inventario">

        {inventario.length === 0 ? (

          <p className="vacio">
            No hay productos en el inventario.
          </p>

        ) : (

          inventario.map((producto) => (

            <div
              className="producto"
              key={producto.id}
            >

              <div className="producto-info">

                <h3>{producto.nombre}</h3>

                <p>
                  Cantidad disponible:
                  <strong>
                    {" "}
                    {producto.cantidad}
                  </strong>
                </p>

              </div>

              <div className="acciones">

                <button
                  className="disminuir"
                  onClick={() =>
                    disminuirCantidad(producto.id)
                  }
                >
                  −
                </button>

                <span className="cantidad">
                  {producto.cantidad}
                </span>

                <button
                  className="aumentar"
                  onClick={() =>
                    aumentarCantidad(producto.id)
                  }
                >
                  +
                </button>

                <button
                  className="eliminar"
                  onClick={() =>
                    eliminarProducto(producto.id)
                  }
                >
                  Eliminar
                </button>

              </div>

            </div>

          ))

        )}

      </div>

      <button
        className="reiniciar"
        onClick={() =>
          dispatch({ type: "REINICIAR" })
        }
      >
        🔄 Reiniciar inventario
      </button>

    </div>
  );
}

export default App;