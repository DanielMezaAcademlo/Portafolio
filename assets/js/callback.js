// function myDisplayer(some) {
//   console.log(some);
// }

// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }

// let result = myCalculator(5, 5);
// myDisplayer(result);

// function myDisplayer(some) {
//   console.log(some);
// }

// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   myDisplayer(sum);
// }

// myCalculator(5, 5);

function myDisplayer(resultado, otroNumero) {
  let suma = resultado + otroNumero;
  console.log(suma);
}

function myCalculator(num1, num2, funcionParametro) {
  let sum = num1 + num2;
  funcionParametro(sum, 10);
}

myCalculator(15, 5, myDisplayer);
