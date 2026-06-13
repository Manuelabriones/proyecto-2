const invitados = [
    "Ana",
    "Alberto",
    "Carlos",
    "Daniel",
    "Elena",
    "Fernando"
];

const encontrarPar = (lista) => {
    let puntero1 = 0;
    let puntero2 = 1;

    while (puntero2 < lista.length) {
        if (lista[puntero1][0] === lista[puntero2][0]) {
            return [lista[puntero1], lista[puntero2]];
        }

        puntero1++;
        puntero2++;
    }

    return null;
};

const resultado = encontrarPar(invitados);

if (resultado) {
    console.log("Primer par encontrado:");
    console.log(resultado[0], "y", resultado[1]);
} else {
    console.log("No se encontró ningún par.");
}