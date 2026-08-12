// ==========================================
// SISTEMA DE RESERVAS - RESTAURANTE
// Promises y Async/Await
// ==========================================


// Número de mesas disponibles
const mesasDisponibles = 5;


// ==========================================
// 1. VERIFICAR DISPONIBILIDAD
// ==========================================

function verificarDisponibilidad(mesasSolicitadas) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (mesasSolicitadas <= mesasDisponibles) {

                resolve(
                    `Hay ${mesasDisponibles} mesas disponibles.`
                );

            } else {

                reject(
                    `No hay suficientes mesas disponibles. Solicitaste ${mesasSolicitadas} y solo hay ${mesasDisponibles}.`
                );
            }

        }, 1000);

    });
}


// ==========================================
// 2. ENVIAR CONFIRMACIÓN POR CORREO
// ==========================================

function enviarConfirmacionReserva(nombreCliente) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            // Simulamos si el correo se envía correctamente
            const envioExitoso = Math.random() >= 0.3;

            if (envioExitoso) {

                resolve(
                    `Correo de confirmación enviado a ${nombreCliente}.`
                );

            } else {

                reject(
                    `No se pudo enviar el correo de confirmación a ${nombreCliente}.`
                );
            }

        }, 1000);

    });
}


// ==========================================
// 3. HACER RESERVA
// ==========================================

async function hacerReserva(nombreCliente, mesasSolicitadas) {

    console.log("\n================================");
    console.log("NUEVA RESERVA");
    console.log("================================");

    console.log(`Cliente: ${nombreCliente}`);
    console.log(`Mesas solicitadas: ${mesasSolicitadas}`);

    try {

        // Esperamos la verificación de disponibilidad
        const disponibilidad =
            await verificarDisponibilidad(mesasSolicitadas);

        console.log(disponibilidad);

        // Si hay mesas, enviamos confirmación
        const confirmacion =
            await enviarConfirmacionReserva(nombreCliente);

        console.log(confirmacion);

        console.log(
            "✅ Reserva realizada correctamente."
        );

    } catch (error) {

        console.error(
            `❌ Error en la reserva: ${error}`
        );
    }
}


// ==========================================
// 4. PRUEBAS
// ==========================================


// Reserva válida
hacerReserva("Manuela", 2);


// Reserva que supera las mesas disponibles
hacerReserva("Carlos", 8);


// Otra reserva válida
hacerReserva("Ana", 1);