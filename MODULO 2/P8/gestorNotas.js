const fs = require("fs");

const archivo = "notas.json";

// Leer notas
const obtenerNotas = () => {
    if (!fs.existsSync(archivo)) {
        return [];
    }

    const datos = fs.readFileSync(archivo, "utf8");
    return JSON.parse(datos);
};

// Guardar notas
const guardarNotas = (notas) => {
    fs.writeFileSync(archivo, JSON.stringify(notas, null, 2));
};

// Crear nota
const crearNota = (titulo, contenido) => {
    const notas = obtenerNotas();

    notas.push({
        titulo,
        contenido
    });

    guardarNotas(notas);
    console.log("Nota guardada correctamente.");
};

// Listar notas
const listarNotas = () => {
    const notas = obtenerNotas();

    console.log("=== LISTA DE NOTAS ===");

    notas.forEach((nota, index) => {
        console.log(`${index + 1}. ${nota.titulo}`);
        console.log(nota.contenido);
        console.log("----------------");
    });
};

// Eliminar nota
const eliminarNota = (titulo) => {
    const notas = obtenerNotas();

    const nuevasNotas = notas.filter(
        nota => nota.titulo !== titulo
    );

    guardarNotas(nuevasNotas);

    console.log(`Nota "${titulo}" eliminada.`);
};

// Pruebas
crearNota("Tarea", "Terminar proyecto Node.js");
crearNota("Compras", "Leche, Pan y Huevos");

listarNotas();

eliminarNota("Compras");

listarNotas();