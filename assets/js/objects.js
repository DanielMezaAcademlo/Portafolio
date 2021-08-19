//forin

// const objetoForIn = { a: 1, b: 2, c: 3, d: { d1: 4 } };

// for (const item in objetoForIn) {
//     console.log(item);
//     console.log(objetoForIn[item]); //objeto.propiedad ---> personas.nombre ---> personas[nombre]
//     console.log(`${item}: ${objetoForIn[item]}`);
//   if (typeof objetoForIn[item] === "object") {
//     for (const key in objetoForIn[item]) {
//       console.log(key);
//       console.log(objetoForIn[item]);
//     }
//   }
// }

// for (const key in objetoForIn) {
//   if (objetoForIn.hasOwnProperty(key)) {
//     console.log("Si existe");
//   } else {
//     console.log("No existe la propiedad nombre");
//   }
// }

//for of

// const iteratorString = "Hola, Cómo estás ?";
// const iteratorArray = [1, 2, 3, 4, 5];
// const iteratorArrayOfObject = [{ nombre: "Daniel" }, { nombre: "Jair" }];

// for (const i of iteratorString) {
//   console.log(i);
// }

// for (const i of iteratorArray) {
//   console.log(i);
// }

// for (const iterator of iteratorArrayOfObject) {
//     console.log(i);
//   for (const key in iterator) {
//     console.log(`El nombre es ${iterator[key]}`);
//   }
// }
