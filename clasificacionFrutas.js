// Clasificación de Frutas

let frutas = ["manzana", "pera", "manzana", "naranja", "pera", "manzana"];

let conteo = {};

// con ciclo for
for (let i = 0; i < frutas.length; i++) {
  let fruta = frutas[i];

  if (conteo[fruta]) {
    conteo[fruta]++;
  } else {
    conteo[fruta] = 1;
  }
}

// imprimir resultados
console.log("Cantidad de cada fruta:");
for (let fruta in conteo) {
  console.log(fruta + ": " + conteo[fruta]);
}