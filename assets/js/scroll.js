const header = document.getElementById("main-header");
const about = document.getElementById("about-section");
const aboutImg = document.getElementById("about-img");
const scrollButton = document.getElementById("scroll-button");
const mainSection = document.getElementById("main-section");
const linkItem = document.getElementsByClassName("item");

//FUNCIONES

//Acceder a elementos por clase
for (let i = 0; i < linkItem.length; i++) {
  const element = linkItem[i];
  element.addEventListener("click", function() {
    element[i].classList.remove("active");
    console.log(element.innerText);
    console.log(element.attributes);
    element.classList.add("active");
  });
}

//Función paracambiar la clase o las clases de los elementos según el scroll

function scrollHeaderTop() {
  let offsetAbout = about.offsetTop / 3;
  // console.log("Offset - 100 ---> ", offsetAbout);
  // console.log("Offset original ---> ", offsetAbout);

  if (window.scrollY > 500) {
    header.classList.add("fixed-header");
  } else if (window.scrollY === 0) {
    header.classList.remove("fixed-header");
  }

  if (window.scrollY > offsetAbout) {
    about.style.opacity = "1";
  }
}

//Función para hacer scroll a una sección específica con un click

function scrollWindowTop() {
  // let offsetMain = mainSection.offsetTop;
  let offsetAbout = about.offsetTop - header.offsetHeight;
  window.scrollTo(0, offsetAbout);

  // scrollWindowTop
}

//LISTENERS

document.addEventListener("scroll", scrollHeaderTop);
// document.onscroll = scrollHeaderTop;

// scrollButton.addEventListener("click", scrollWindowTop);
scrollButton.onclick = scrollWindowTop;
