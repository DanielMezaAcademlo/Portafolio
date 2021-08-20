const form = document.getElementById("main-form");
const container = document.getElementById("users-container");
//Variables útiles
let users = [];

//Funciones

//Función para crear registros
const createUser = event => {
  //No ejecute su comportamiento por defecto
  event.preventDefault();

  //Crear un objeto con la información de los inputs
  let user = {
    nombre: document.getElementById("nombre").value,
    ocupacion: document.getElementById("job").value
  };

  //Agregamos al arreglo, el objeto
  users.push(user);
  form.reset();
  renderList();
  console.log(users);
};

//Función encargada de pintar todos los usuarios del arreglo users
const renderList = () => {
  container.innerHTML = "";
  if (users.length > 0) {
    users.forEach(user => {
      //Creamos el contenedor principal para el usuario
      const userContainer = document.createElement("div");
      userContainer.classList.add("userItem");

      //Creamos el contenedor y el contenido para la información del usuario
      const userInfo = document.createElement("div");
      userInfo.classList.add("userInfo");

      const userInfoName = document.createElement("h4");
      const userInfoJob = document.createElement("h4");

      userInfoName.innerText = user.nombre;
      userInfoJob.innerText = user.ocupacion;

      //Creamos el contenedor y el contenido para los botones de acción
      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("actions");

      const updateButton = document.createElement("button");
      const deleteButton = document.createElement("button");

      updateButton.innerText = "Editar";
      updateButton.classList.add("update");
      deleteButton.innerText = "Eliminar";
      deleteButton.classList.add("delete");

      //Agregar al respectivo container

      //(Ver HTML)
      //Agregamos el contenedor con clase userItem al contenedor principal (id="users-container")
      container.appendChild(userContainer);

      //Agregamos el contenedor con clase userInfo al contenedor con clase userItem
      userContainer.appendChild(userInfo);

      //Agregamos los h4 con la información del usuario  al contenedor con clase userInfo
      userInfo.appendChild(userInfoName);
      userInfo.appendChild(userInfoJob);

      //Agregamos el contenedor con clase actions al contenedor con clase userItem
      userContainer.appendChild(buttonContainer);

      //Agregamos los botones Editar y Eliminar al contenedor con clase actions
      buttonContainer.appendChild(updateButton);
      buttonContainer.appendChild(deleteButton);
    });
  }
};

//Eventos
form.onsubmit = createUser;

console.log(users);
