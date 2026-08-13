// ==========================================
// CONECTAR ZOD
// ==========================================

const { z } = Zod;


// ==========================================
// ELEMENTOS DEL FORMULARIO
// ==========================================

const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const successMessage = document.getElementById("successMessage");


// ==========================================
// ESQUEMA DE VALIDACIÓN CON ZOD
// ==========================================

const registerSchema = z.object({

    name: z
        .string()
        .min(3, "El nombre debe tener al menos 3 caracteres."),

    email: z
        .string()
        .email("Ingresa un correo electrónico válido."),

    password: z
        .string()
        .min(8, "La contraseña debe tener al menos 8 caracteres.")
        .regex(
            /[A-Z]/,
            "La contraseña debe contener al menos una mayúscula."
        )
        .regex(
            /[0-9]/,
            "La contraseña debe contener al menos un número."
        )

});


// ==========================================
// OBTENER DATOS
// ==========================================

function obtenerDatos() {

    return {

        name: nameInput.value.trim(),

        email: emailInput.value.trim(),

        password: passwordInput.value

    };

}


// ==========================================
// MOSTRAR ERRORES
// ==========================================

function mostrarErrores(errores) {

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    errores.forEach(error => {

        const campo = error.path[0];

        if (campo === "name") {
            nameError.textContent = error.message;
        }

        if (campo === "email") {
            emailError.textContent = error.message;
        }

        if (campo === "password") {
            passwordError.textContent = error.message;
        }

    });

}


// ==========================================
// ENVIAR FORMULARIO
// ==========================================

form.addEventListener("submit", function(event) {

    // Evitar que se recargue la página
    event.preventDefault();

    // Limpiar mensajes
    mostrarErrores([]);

    successMessage.textContent = "";


    // Obtener datos
    const datos = obtenerDatos();


    // Validar con Zod
    const resultado = registerSchema.safeParse(datos);


    // ==========================================
    // SI HAY ERRORES
    // ==========================================

    if (!resultado.success) {

        mostrarErrores(resultado.error.issues);

        return;

    }


    // ==========================================
    // REGISTRO CORRECTO
    // ==========================================

    successMessage.textContent =
        "¡Registro realizado correctamente!";

    console.log("Registro correcto:");

    console.log(datos);

});