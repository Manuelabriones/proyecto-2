const fs = require("fs");

// -----------------------------------------
// Simular lectura de un archivo JSON
// -----------------------------------------
function leerDatos(callback) {

    setTimeout(() => {

        fs.readFile("libros.json", "utf8", (error, data) => {

            if (error) {
                callback(error, null);
                return;
            }

            try {

                const datos = JSON.parse(data);

                callback(null, datos);

            } catch (error) {

                callback(error, null);
            }

        });

    }, 1000);
}


// -----------------------------------------
// Simular escritura de datos en JSON
// -----------------------------------------
function escribirDatos(datos, callback) {

    setTimeout(() => {

        fs.writeFile(
            "libros.json",
            JSON.stringify(datos, null, 4),
            "utf8",
            (error) => {

                if (error) {
                    callback(error);
                    return;
                }

                callback(null);
            }
        );

    }, 1000);
}


// -----------------------------------------
// Consultar todos los libros
// -----------------------------------------
function consultarLibros() {

    leerDatos((error, datos) => {

        if (error) {
            console.error("Error al leer los libros:", error);
            return;
        }

        console.log("\n===== INVENTARIO DE LIBROS =====\n");

        datos.libros.forEach((libro, index) => {

            console.log(`Libro #${index + 1}`);
            console.log(`Título: ${libro.titulo}`);
            console.log(`Autor: ${libro.autor}`);
            console.log(`Género: ${libro.genero}`);

            console.log(
                `Estado: ${
                    libro.disponible
                        ? "Disponible"
                        : "Prestado"
                }`
            );

            console.log("------------------------------");
        });
    });
}


// -----------------------------------------
// Agregar un nuevo libro
// -----------------------------------------
function agregarLibro(titulo, autor, genero) {

    leerDatos((error, datos) => {

        if (error) {
            console.error("Error al leer los libros:", error);
            return;
        }

        const nuevoLibro = {
            titulo: titulo,
            autor: autor,
            genero: genero,
            disponible: true
        };

        datos.libros.push(nuevoLibro);

        escribirDatos(datos, (error) => {

            if (error) {
                console.error(
                    "Error al guardar el libro:",
                    error
                );
                return;
            }

            console.log(
                `\nEl libro "${titulo}" fue agregado correctamente.`
            );
        });
    });
}


// -----------------------------------------
// Actualizar disponibilidad
// -----------------------------------------
function actualizarDisponibilidad(titulo, disponible) {

    leerDatos((error, datos) => {

        if (error) {
            console.error("Error al leer los libros:", error);
            return;
        }

        const libro = datos.libros.find(
            libro => libro.titulo.toLowerCase() === titulo.toLowerCase()
        );

        if (!libro) {

            console.log(
                `\nNo se encontró el libro "${titulo}".`
            );

            return;
        }

        libro.disponible = disponible;

        escribirDatos(datos, (error) => {

            if (error) {
                console.error(
                    "Error al actualizar el libro:",
                    error
                );
                return;
            }

            console.log(
                `\nEl libro "${titulo}" ahora está ${
                    disponible
                        ? "disponible"
                        : "prestado"
                }.`
            );
        });
    });
}


// -----------------------------------------
// EJEMPLOS DE USO
// -----------------------------------------

console.log("===== SISTEMA DE BIBLIOTECA =====");


// Consultar libros
consultarLibros();


// Agregar un libro
setTimeout(() => {

    agregarLibro(
        "Harry Potter y la piedra filosofal",
        "J.K. Rowling",
        "Fantasía"
    );

}, 2500);


// Actualizar disponibilidad
setTimeout(() => {

    actualizarDisponibilidad(
        "El principito",
        false
    );

}, 5000);


// Consultar nuevamente
setTimeout(() => {

    consultarLibros();

}, 7500);