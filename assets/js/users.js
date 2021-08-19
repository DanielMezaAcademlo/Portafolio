const users = [
  { nombre: "Daniel", pais: "México" },
  { nombre: "Francisco", pais: "Venezuela" },
  { nombre: "Francisco", pais: "México" },
  { nombre: "María José", pais: "Colombia" }
];

const table = document.getElementById("users");
const row = document.createElement("ul");
table.appendChild(row);

users.forEach(user => {
  const nombre = document.createElement("li");
  const pais = document.createElement("li");
  nombre.innerText = user.nombre;
  pais.innerText = user.pais;

  row.appendChild(nombre);
  row.appendChild(pais);
});
