const productos = [
    { nombre: "Laptop", precio: 1500, categoria: "Electrónica" },
    { nombre: "Mouse", precio: 50, categoria: "Electrónica" },
    { nombre: "Teclado", precio: 80, categoria: "Electrónica" },
    { nombre: "Cuaderno", precio: 30, categoria: "Papelería" },
    { nombre: "Mochila", precio: 90, categoria: "Accesorios" }
];

// 1. Filtrar productos menores a $100
const productosBaratos = productos.filter(producto => producto.precio < 100);

console.log("Productos menores a $100:");
console.log(productosBaratos);

// 2. Ordenar alfabéticamente
const productosOrdenados = [...productosBaratos].sort((a, b) =>
    a.nombre.localeCompare(b.nombre)
);

console.log("Productos ordenados:");
console.log(productosOrdenados);

// 3. Obtener solo nombres
const nombresProductos = productosOrdenados.map(producto => producto.nombre);

console.log("Nombres de productos:");
console.log(nombresProductos);

// Opcional: calcular suma total de productos baratos
const total = productosBaratos.reduce(
    (acumulador, producto) => acumulador + producto.precio,
    0
);

console.log("Total de productos baratos: $" + total);