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
            <small class="fecha">${fecha.toLocaleString()}</small>
            <br>
            <button class="eliminar">Eliminar</button>
        `;

        listaComentarios.appendChild(nuevoComentario);

        document.getElementById("comentario").value = "";

        let botonEliminar = nuevoComentario.querySelector(".eliminar");

        botonEliminar.addEventListener("click", function() {

            nuevoComentario.remove();

        });

    }

});