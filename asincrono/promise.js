//CREAR UNA PROMESA

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 10);

  setTimeout(
    () =>
      number > 5
        ? resolve(number)
        : reject(new Error(`${number} es menor que 5`)),
    3000
  );
});

promise.then(number => console.log(number)).catch(err => console.log(err));
