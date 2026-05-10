let boton = document.getElementById("agregar");
let listaComentarios = document.getElementById("listaComentarios");

boton.addEventListener("click", function() {

    let texto = document.getElementById("comentario").value;

    if (texto.trim() !== "") {

        let nuevoComentario = document.createElement("div");
        nuevoComentario.classList.add("comentario");

        let fecha = new Date();

        nuevoComentario.innerHTML = `
            <p>${texto}</p>
            <small>${fecha.toLocaleString()}</small>
        `;

        listaComentarios.appendChild(nuevoComentario);

        document.getElementById("comentario").value = "";
    }

});