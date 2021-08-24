//url base
const API = "https://pokeapi.co/api/v2/";
//Interacción
//POKEMON API
const button = document.getElementById("searchPokemon");
//TRIVIA API
const buttonTrivia = document.getElementById("searchTrivia");

//Funciones

//Pokemon API
const handleSearchPokemon = () => {
  fetch(`${API}pokemon/ditto`)
    .then(respuesta => respuesta.json())
    .then(resultado => resultado.location_area_encounters)
    .then(location => {
      fetch(location)
        .then(locationResponse => locationResponse.json())
        .then(finalLocationResponse => console.log(finalLocationResponse))
        .catch(error =>
          console.log("Hubo un error en el segundo fetch " + error)
        );
    })
    .catch(error => console.log("Hubo un error ): ---->" + error));
};

//Trivia API

const handleResponseTrivia = () => {
  fetch("https://opentdb.com/api.php?amount=10")
    .then(response => response.json())
    .then(result => console.log(result));
};

//Eventos
button.onclick = handleSearchPokemon;
buttonTrivia.onclick = handleResponseTrivia;
