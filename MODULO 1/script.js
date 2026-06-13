function generarPassword() {
    const caracteres =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

    let password = "";

    for (let i = 0; i < 12; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        password += caracteres[indice];
    }

    document.getElementById("password").value = password;
}