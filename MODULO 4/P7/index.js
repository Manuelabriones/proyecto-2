const {
    planetas,
    mostrarPlanetas,
    buscarPlaneta
} = require("./planetas");


// Mostrar lista de planetas

mostrarPlanetas();


// Mostrar cantidad de planetas

console.log(`\n🌎 Total de planetas registrados: ${planetas.length}`);


// Funcionalidad adicional:
// Buscar un planeta

buscarPlaneta("Marte");