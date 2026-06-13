const listaDeCompras = [];

const agregarProducto = (producto) => {
    if (!listaDeCompras.includes(producto)) {
        listaDeCompras.push(producto);
        console.log(`${producto} agregado.`);
    } else {
        console.log(`${producto} ya existe en la lista.`);
    }
};

const eliminarProducto = (producto) => {
    const indice = listaDeCompras.indexOf(producto);

    if (indice !== -1) {
        listaDeCompras.splice(indice, 1);
        console.log(`${producto} eliminado.`);
    } else {
        console.log(`${producto} no se encontró.`);
    }
};

const mostrarLista = () => {
    console.log("Lista de Compras:");
    listaDeCompras.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto}`);
    });
};

// Pruebas
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Huevos");
agregarProducto("Pan");

mostrarLista();

eliminarProducto("Pan");

mostrarLista();