//Recuperar elementos

//Por su id
const header2 = document.getElementById("main-header");
//Por sus clases
const listItem = document.getElementsByClassName("item");
// let lastItemArray = [...listItem];
// let lastItemArray2 = Array.from(listItem);
// let lastItemArray3 = [];

// for (let i = 0; i < listItem.length; i++) {
//   const element = listItem[i];
//   lastItemArray3.push(element);
// }

// lastItemArray3.forEach(element => {
//   console.log(element);
// });

//Por selector
const firstListItem = document.querySelector(".item");
const firstMainSection = document.querySelector(".main-title h2");
const allListItem = document.querySelectorAll("a.item");
const allContainers = document.querySelectorAll(".container .logo a");
const inputSelector = document.querySelectorAll(
  "input[placeholder='Nombre Completo']"
);

// console.log(header2);
// console.log(listItem);
// console.log(firstListItem);
// console.log(firstMainSection);
// console.log(allContainers);
console.log(allListItem);
