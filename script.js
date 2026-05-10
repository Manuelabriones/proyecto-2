const password = document.getElementById("password");
const boton = document.getElementById("generar");

boton.addEventListener("click", function(){

    let caracteres = "abcdefghijklmnopqrstuvwxyz";

    if(document.getElementById("mayusculas").checked){
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if(document.getElementById("numeros").checked){
        caracteres += "0123456789";
    }

    if(document.getElementById("simbolos").checked){
        caracteres += "!@#$%^&*()_+";
    }

    let nuevaPassword = "";

    for(let i = 0; i < 12; i++){

        let random = Math.floor(Math.random() * caracteres.length);

        nuevaPassword += caracteres[random];
    }

    password.value = nuevaPassword;

});