// Lista de planetas favoritos

const planetas = [
    {
        nombre: "Marte",
        tipo: "Rocoso",
        distancia: "225 millones de km"
    },
    {
        nombre: "Júpiter",
        tipo: "Gigante gaseoso",
        distancia: "778 millones de km"
    },
    {
        nombre: "Saturno",
        tipo: "Gigante gaseoso",
        distancia: "1.4 mil millones de km"
    },
    {
        nombre: "Neptuno",
        tipo: "Gigante helado",
        distancia: "4.5 mil millones de km"
    }
];


// Mostrar los planetas

function mostrarPlanetas() {

    console.log("================================");
    console.log("     🪐 PLANETAS FAVORITOS");
    console.log("================================");

    planetas.forEach((planeta, index) => {

        console.log(`\n${index + 1}. ${planeta.nombre}`);
        console.log(`   Tipo: ${planeta.tipo}`);
        console.log(`   Distancia: ${planeta.distancia}`);

    });

    console.log("\n================================");
}


// Funcionalidad adicional:
// Buscar un planeta por nombre

function buscarPlaneta(nombre) {

    const planeta = planetas.find(
        planeta =>
            planeta.nombre.toLowerCase() === nombre.toLowerCase()
    );

    if (planeta) {

        console.log("\n🔎 Planeta encontrado:");
        console.log(`Nombre: ${planeta.nombre}`);
        console.log(`Tipo: ${planeta.tipo}`);
        console.log(`Distancia: ${planeta.distancia}`);

    } else {

        console.log(`\n❌ No se encontró el planeta "${nombre}".`);

    }
}


// Exportar funciones y datos

module.exports = {
    planetas,
    mostrarPlanetas,
    buscarPlaneta
};