// ==========================================
// FORMULARIO DE REGISTRO DE EVENTOS
// ==========================================

const form = document.getElementById("eventForm");


// ==========================================
// EVENTO SUBMIT
// ==========================================

form.addEventListener("submit", function (event) {

    // Evitar que la página se recargue
    event.preventDefault();

    // Limpiar mensajes anteriores
    clearErrors();

    let isValid = true;


    // ======================================
    // OBTENER VALORES
    // ======================================

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const date =
        document.getElementById("date").value;

    const file =
        document.getElementById("document").files[0];


    // ======================================
    // 1. VALIDAR NOMBRE
    // ======================================

    if (name === "") {

        document.getElementById("nameError").textContent =
            "El nombre es obligatorio.";

        isValid = false;

    } else if (name.length < 3) {

        document.getElementById("nameError").textContent =
            "El nombre debe tener al menos 3 caracteres.";

        isValid = false;
    }


    // ======================================
    // 2. VALIDAR CORREO
    // ======================================

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        document.getElementById("emailError").textContent =
            "El correo es obligatorio.";

        isValid = false;

    } else if (!emailPattern.test(email)) {

        document.getElementById("emailError").textContent =
            "Ingresa un correo electrónico válido.";

        isValid = false;
    }


    // ======================================
    // 3. VALIDAR TELÉFONO
    // ======================================

    const phonePattern = /^[0-9]{10}$/;

    if (phone === "") {

        document.getElementById("phoneError").textContent =
            "El teléfono es obligatorio.";

        isValid = false;

    } else if (!phonePattern.test(phone)) {

        document.getElementById("phoneError").textContent =
            "El teléfono debe tener exactamente 10 números.";

        isValid = false;
    }


    // ======================================
    // 4. VALIDAR INTERESES
    // ======================================

    const interests =
        document.querySelectorAll(
            'input[name="interest"]:checked'
        );

    if (interests.length === 0) {

        document.getElementById("interestError").textContent =
            "Selecciona al menos un interés.";

        isValid = false;
    }


    // ======================================
    // 5. VALIDAR HORARIO
    // ======================================

    const schedule =
        document.querySelector(
            'input[name="schedule"]:checked'
        );

    if (!schedule) {

        document.getElementById("scheduleError").textContent =
            "Selecciona un horario.";

        isValid = false;
    }


    // ======================================
    // 6. VALIDAR FECHA
    // ======================================

    if (date === "") {

        document.getElementById("dateError").textContent =
            "Selecciona una fecha.";

        isValid = false;

    } else {

        const selectedDate =
            new Date(date + "T00:00:00");

        const today = new Date();

        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {

            document.getElementById("dateError").textContent =
                "La fecha no puede ser anterior a hoy.";

            isValid = false;
        }
    }


    // ======================================
    // 7. VALIDAR ARCHIVO OPCIONAL
    // ======================================

    if (file) {

        const allowedTypes = [
            "application/pdf",
            "image/jpeg",
            "image/png"
        ];

        if (!allowedTypes.includes(file.type)) {

            document.getElementById("fileError").textContent =
                "Solo se permiten archivos PDF, JPG o PNG.";

            isValid = false;
        }

        // Máximo 5 MB
        const maxSize = 5 * 1024 * 1024;

        if (file.size > maxSize) {

            document.getElementById("fileError").textContent =
                "El archivo no puede superar los 5 MB.";

            isValid = false;
        }
    }


    // ======================================
    // RESULTADO
    // ======================================

    if (isValid) {

        document.getElementById("successMessage").textContent =
            "¡Registro realizado correctamente!";

        console.log("Formulario válido.");
        console.log("Nombre:", name);
        console.log("Correo:", email);
        console.log("Teléfono:", phone);
        console.log("Fecha:", date);

        if (interests.length > 0) {

            console.log(
                "Intereses:",
                Array.from(interests).map(
                    interest => interest.value
                )
            );
        }

        if (schedule) {

            console.log(
                "Horario:",
                schedule.value
            );
        }

        if (file) {

            console.log(
                "Archivo:",
                file.name
            );
        }

        // Limpiar formulario
        form.reset();
    }

});


// ==========================================
// LIMPIAR ERRORES
// ==========================================

function clearErrors() {

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("interestError").textContent = "";
    document.getElementById("scheduleError").textContent = "";
    document.getElementById("dateError").textContent = "";
    document.getElementById("fileError").textContent = "";

    document.getElementById("successMessage").textContent = "";
}