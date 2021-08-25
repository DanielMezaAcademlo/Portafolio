const API = "https://opentdb.com/api.php?amount=10";

const fetchAPI = () => {
  fetch(API)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(err => console.log(err));
};

fetchAPI();

console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
