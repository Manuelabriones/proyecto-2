// app.js

import { registrarDestino, mostrarItinerario } from "./viajes.js";

// Iniciar aplicación
const iniciarApp = () => {
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");
    registrarDestino("New York", "2024-08-20", "Avión");

    mostrarItinerario();
};

// Ejecutar aplicación
iniciarApp();