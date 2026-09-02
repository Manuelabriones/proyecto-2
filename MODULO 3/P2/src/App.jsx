import { useState } from "react";
import "./App.css";

function App() {

  const [producto, setProducto] = useState("");
  const [lista, setLista] = useState([]);

  function agregarProducto() {

    if (producto.trim() === "") {
      return;
    }

    const nuevoProducto = {
      id: Date.now(),
      nombre: producto
    };

    setLista([...lista, nuevoProducto]);

    setProducto("");
  }


  function eliminarProducto(id) {

    const nuevaLista = lista.filter(
      producto => producto.id !== id
    );

    setLista(nuevaLista);
  }


  function limpiarLista() {

    setLista([]);

  }


  function manejarEnter(event) {

    if (event.key === "Enter") {
      agregarProducto();
    }

  }


  return (

    <div className="container">

      <h1>🛒 Lista de Compras</h1>

      <p>
        Agrega los productos que necesitas comprar.
      </p>


      <div className="form">

        <input
          type="text"
          placeholder="Ej. Leche"
          value={producto}
          onChange={(event) =>
            setProducto(event.target.value)
          }
          onKeyDown={manejarEnter}
        />

        <button onClick={agregarProducto}>
          Agregar
        </button>

      </div>


      <p className="contador">
        Productos en la lista: {lista.length}
      </p>


      {lista.length === 0 ? (

        <p className="vacia">
          No hay productos en la lista.
        </p>

      ) : (

        <ul>

          {lista.map((item) => (

            <li key={item.id}>

              <span>
                {item.nombre}
              </span>

              <button
                className="eliminar"
                onClick={() =>
                  eliminarProducto(item.id)
                }
              >
                Eliminar
              </button>

            </li>

          ))}

        </ul>

      )}


      {lista.length > 0 && (

        <button
          className="limpiar"
          onClick={limpiarLista}
        >
          Limpiar lista
        </button>

      )}

    </div>

  );

}

export default App;