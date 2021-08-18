const personas = [
  {
    nombre: "Daniel",
    edad: 25,
    pais: "México"
  },
  {
    nombre: "Enver",
    edad: 26,
    pais: "Colombia"
  },
  {
    nombre: "Ricardo",
    edad: 31,
    pais: "Colombia"
  },
  {
    nombre: "Oscar",
    edad: 31,
    pais: "México"
  },
  {
    nombre: "Andres",
    edad: 31,
    pais: "Uruguay"
  }
];

//FOREACH
const fruits = ["apple", "orange", "cherry", "orange"];

// fruits.forEach((valorActual, indice, arreglo) => {
//     console.log(valorActual);
//     console.log(indice);
//     console.log(arreglo);
//   console.log(arreglo[indice]);

//   if (valorActual === "orange") {
//     console.log(`El índice ${indice} es orange, por lo tanto es una naranja`);
//   }
// });

// const forEachFunction = (valorActual, indice, arreglo) => {
//     console.log(valorActual);
//     console.log(indice);
//     console.log(arreglo);
//   console.log(arreglo[indice]);

//   if (valorActual === "orange") {
//     console.log(`El índice ${indice} es orange, por lo tanto es una naranja`);
//   }
// };

// fruits.forEach(forEachFunction);

//FILTER

// const personasDeMexico = persona => {
//   return persona.pais === "México";
// };

// const mexicanos = personas.filter(personasDeMexico);
// console.log(personas);
// console.log(mexicanos);

// const personasDeColombiaMayoresDeEdad = persona => {
//   return persona.pais === "Colombia" && persona.edad >= 18;
// };

// const colombianos = personas.filter(personasDeColombiaMayoresDeEdad);
// console.log(personas);
// console.log(colombianos);

//FIND

// const primerColombianoMayorDeEdad = persona =>
//   persona.edad >= 18 && persona.pais === "Colombia";

// const mayorDeEdadColombia = personas.find(primerColombianoMayorDeEdad);
// console.log(mayorDeEdadColombia);
// console.log(personas);

//SOME

// const verificarPersonaUruguay = persona => {
//   return persona.pais === "Colombia";
// };

// const verificarPersona = personas.some(verificarPersonaUruguay);
// console.log(verificarPersona);

//MAP

// const numbers = [100, 25, 10, 50, 60];

// const numbers2 = numbers.map(number => number / 10);
// console.log(numbers);
// console.log(numbers2);
