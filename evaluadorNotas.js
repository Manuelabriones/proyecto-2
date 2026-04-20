// Evaluador de Notas con Mensajes Personalizados

let nota = 85; // puedes cambiar este valor para probar

if (nota > 0) {
  console.log("La nota del estudiante es: " + nota);

  if (nota >= 90) {
    console.log("Resultado: Excelente");
  } else if (nota >= 75) {
    console.log("Resultado: Bien");
  } else if (nota >= 60) {
    console.log("Resultado: Suficiente");
  } else {
    console.log("Resultado: No aprueba");
  }

} else {
  console.log("La nota no es válida");
}