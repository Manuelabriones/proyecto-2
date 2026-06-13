const regalos = [
    "Muñeca",
    "Bicicleta",
    "Videojuego",
    "Rompecabezas",
    "Pelota"
];

const buscarRegalo = (gifts, giftName, index = 0) => {

    // Caso base: no encontrado
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    // Caso base: encontrado
    if (gifts[index] === giftName) {
        return `${giftName} encontrado en la posición ${index}.`;
    }

    // Llamada recursiva
    return buscarRegalo(gifts, giftName, index + 1);
};

console.log(buscarRegalo(regalos, "Videojuego"));
console.log(buscarRegalo(regalos, "Patines"));