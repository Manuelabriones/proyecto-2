const texto = "JavaScript es un lenguaje de programacion muy poderoso y versatil";

const encontrarPalabraMasLarga = (texto) => {
    const palabras = texto.split(" ");

    let longestWord = "";

    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > longestWord.length) {
            longestWord = palabras[i];
        }
    }

    return longestWord;
};

const resultado = encontrarPalabraMasLarga(texto);

console.log("Texto:");
console.log(texto);

console.log("Palabra más larga:");
console.log(resultado);