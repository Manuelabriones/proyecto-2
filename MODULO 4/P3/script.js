// URL de la API
const API_URL = "https://rickandmortyapi.com/api/character";


// Elementos del HTML
const fetchBtn = document.getElementById("fetchBtn");
const axiosBtn = document.getElementById("axiosBtn");
const dataContainer = document.getElementById("data-container");
const message = document.getElementById("message");


// -----------------------------------------
// Mostrar personajes
// -----------------------------------------
function displayCharacters(characters) {

    dataContainer.innerHTML = "";

    characters.forEach(character => {

        const characterCard = document.createElement("div");

        characterCard.classList.add("character-card");

        characterCard.innerHTML = `
            <img
                src="${character.image}"
                alt="${character.name}"
            >

            <h2>${character.name}</h2>

            <p>
                <strong>Estado:</strong>
                ${character.status}
            </p>

            <p>
                <strong>Especie:</strong>
                ${character.species}
            </p>
        `;

        dataContainer.appendChild(characterCard);
    });
}


// -----------------------------------------
// Obtener personajes con FETCH
// -----------------------------------------
async function getCharactersWithFetch() {

    try {

        message.textContent = "Cargando personajes...";

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(
                `Error HTTP: ${response.status}`
            );
        }

        const data = await response.json();

        displayCharacters(data.results);

        message.textContent =
            "Personajes obtenidos correctamente con Fetch.";

    } catch (error) {

        console.error("Error con Fetch:", error);

        message.textContent =
            "No se pudieron obtener los personajes.";
    }
}


// -----------------------------------------
// Obtener personajes con AXIOS
// -----------------------------------------
async function getCharactersWithAxios() {

    try {

        message.textContent = "Cargando personajes...";

        const response = await axios.get(API_URL);

        displayCharacters(response.data.results);

        message.textContent =
            "Personajes obtenidos correctamente con Axios.";

    } catch (error) {

        console.error("Error con Axios:", error);

        message.textContent =
            "No se pudieron obtener los personajes.";
    }
}


// -----------------------------------------
// Eventos de los botones
// -----------------------------------------

fetchBtn.addEventListener(
    "click",
    getCharactersWithFetch
);

axiosBtn.addEventListener(
    "click",
    getCharactersWithAxios
);