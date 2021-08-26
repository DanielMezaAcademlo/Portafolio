// https://dog.ceo/api/breeds/list/all

let selectForm = document.getElementById("breedsSelect");
let mainForm = document.getElementById("main-form");
let imageContainer = document.getElementById("image-dog");

let breedsArray = [];

//Funciones
const fetchAPIBreeds = () => {
  const breedsList = "https://dog.ceo/api/breeds/list/all";

  fetch(breedsList)
    .then(response => response.json())
    .then(result => handleFillBreeds(result.message));
};

const handleFillBreeds = breedListAPI => {
  console.log(breedListAPI);
  for (const breed in breedListAPI) {
    // breedListAPI.breed.length > 0
    if (breedListAPI[breed].length > 0) {
      breedListAPI[breed].forEach(dogBreed => {
        //  dogBreed + ' ' + breed

        breedsArray.push({
          value: `${breed}/${dogBreed}`,
          name: `${dogBreed} ${breed}`
        });
      });
    } else {
      breedsArray.push({
        value: `${breed}`,
        name: `${breed}`
      });
    }
  }

  createOptionsElement();
};

const createOptionsElement = () => {
  if (breedsArray.length > 0) {
    //Crear options
    breedsArray.forEach(optionBreed => {
      selectForm.innerHTML += `<option value="${optionBreed.value}">${optionBreed.name}</option>`;
    });
  }
};

//PROCEDIMIENTO PARA MOSTRAR LA IMAGEN

const handleDataAPI = e => {
  e.preventDefault();
  let breedValue = selectForm.value;
  const imageAPI = `https://dog.ceo/api/breed/${breedValue}/images/random`;

  fetch(imageAPI)
    .then(response => response.json())
    .then(image => {
      imageContainer.innerHTML = "";
      const dogImage = document.createElement("img");
      dogImage.setAttribute("src", image.message);
      imageContainer.appendChild(dogImage);
    })
    .catch(err => console.log(err));
};

document.addEventListener("DOMContentLoaded", fetchAPIBreeds);
mainForm.onsubmit = handleDataAPI;
