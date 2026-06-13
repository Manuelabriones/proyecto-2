const numeros = [15, 8, 27, 3, 42, 19, 7, 35];

const encontrarMaximo = (arr) => {

    // Caso base
    if (arr.length === 1) {
        return arr[0];
    }

    // Dividir
    const mitad = Math.floor(arr.length / 2);

    const izquierda = arr.slice(0, mitad);
    const derecha = arr.slice(mitad);

    // Conquistar
    const maxIzquierda = encontrarMaximo(izquierda);
    const maxDerecha = encontrarMaximo(derecha);

    // Combinar
    return maxIzquierda > maxDerecha ? maxIzquierda : maxDerecha;
};

console.log("Arreglo:", numeros);
console.log("Número máximo:", encontrarMaximo(numeros));