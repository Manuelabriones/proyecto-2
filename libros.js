let librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

function mostrarLibrosLeidos() {
    console.log("Libros leídos:");
    for (let i = 0; i < librosLeidos.length; i++) {
        console.log(librosLeidos[i]);
    }
}

// Prueba
agregarLibro("El Principito");
agregarLibro("1984");
mostrarLibrosLeidos();