//Recuperar el container principal
const container = document.getElementById("container");

//----->Crear el elemento
// const blueContainer = document.createElement("div");
// const blueContainerTitle = document.createElement("h2");
// const blueContainerParagraph = document.createElement("p");

// // -------> Asignarle atributos, como clases o id
// blueContainer.classList.add("azul");
// blueContainer.setAttribute("id", "azul");
// // blueContainer.setAttribute("nombre del atributo", "valor del atributo")
// // blueContainer.setAttribute("class", "azul")

// //H2
// blueContainerTitle.innerText = "Este es un título";

// // P
// blueContainerParagraph.innerText = "Y este un párrafo";

// //------> Agregar ese elemento
// container.appendChild(blueContainer);
// // h2
// blueContainer.appendChild(blueContainerTitle);
// //P
// blueContainer.appendChild(blueContainerParagraph);

container.innerHTML = `<div class="rojo">
<h2>Este es un título</h2>
<p>Y este un párrafo</p>
</div>`;

// container.innerText = `<div class="rojo">
// <h2>Este es un título</h2>
// <p>Y este un párrafo</p>
// </div>`;

console.log(blueContainer);
