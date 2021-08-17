//Declaradas

function saludar(nombre) {
  console.log(`Hola ${nombre} !`);
}

// saludar("Daniel");

//Function Expressions

function suma(n1, n2) {
  return n1 + n2;
}
// let x = suma(3, 3);
const x = function(a, b) {
  return a * b;
};
let z = x(3, 3);
// console.log(z);

//Self-Invoking Functions

let sumaNumeros = 2 + 2; // I will invoke myself

(function() {
  let sumaNumeros2 = sumaNumeros + 2;
  //   console.log(sumaNumeros2);
})(sumaNumeros);

//Arrow Functions

//Arrow function normal
const resta = (n1, n2) => {
  console.log(n1 - n2);
};
resta(5, 3);

//Arrow function que retornan valores
const division = (n1, n2) => {
  return n1 / n2;
};

const imprimirNombre = nombre => {
  return nombre;
};

const imprimirMayorEdad = edad => edad >= 18;

division(20, 2);
imprimirNombre("Fernando");
const verificarEdad = imprimirMayorEdad(14);
// console.log(verificarEdad);

let persona = {
  nombre: "Ángel",
  edad: "29",
  saludo: function() {
    return `Hola ${this.nombre} !`;
  },
  despedida: () => {
    return `Adiós ${this.nombre} !`;
  }
};

let saludoArrowFunction = persona.saludo();
let despedidaArrowFunction = persona.despedida();
console.log(saludoArrowFunction);
console.log(despedidaArrowFunction);
