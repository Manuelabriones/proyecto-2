import './style.css';

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

document.querySelector('#app').innerHTML = `
  <div class="juego">
    <h1>🎯 Adivina el número</h1>

    <p>Estoy pensando en un número del 1 al 100.</p>

    <input 
      type="number" 
      id="numero" 
      placeholder="Escribe tu número"
      min="1"
      max="100"
    >

    <button id="adivinar">Adivinar</button>

    <p id="mensaje"></p>
    <p id="intentos"></p>

    <button id="reiniciar">🔄 Nuevo juego</button>
  </div>
`;

const inputNumero = document.querySelector('#numero');
const botonAdivinar = document.querySelector('#adivinar');
const botonReiniciar = document.querySelector('#reiniciar');
const mensaje = document.querySelector('#mensaje');
const contadorIntentos = document.querySelector('#intentos');

botonAdivinar.addEventListener('click', () => {
  const numero = Number(inputNumero.value);

  if (numero < 1 || numero > 100 || inputNumero.value === '') {
    mensaje.textContent = '⚠️ Escribe un número entre 1 y 100.';
    return;
  }

  intentos++;

  if (numero === numeroSecreto) {
    mensaje.textContent = `🎉 ¡Correcto! El número era ${numeroSecreto}.`;
    contadorIntentos.textContent = `Lo lograste en ${intentos} intentos.`;
    botonAdivinar.disabled = true;
  } else if (numero < numeroSecreto) {
    mensaje.textContent = '⬆️ El número secreto es mayor.';
    contadorIntentos.textContent = `Intentos: ${intentos}`;
  } else {
    mensaje.textContent = '⬇️ El número secreto es menor.';
    contadorIntentos.textContent = `Intentos: ${intentos}`;
  }

  inputNumero.value = '';
  inputNumero.focus();
});

botonReiniciar.addEventListener('click', () => {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  intentos = 0;

  mensaje.textContent = '';
  contadorIntentos.textContent = '';
  inputNumero.value = '';

  botonAdivinar.disabled = false;
  inputNumero.focus();
});