const personas = [];

const formPersona = document.getElementById("formPersona");
const cuerpoTabla = document.getElementById("cuerpoTabla");

function calcularIMC(peso, alturaCm) {
  const alturaM = alturaCm / 100;
  const imc = peso / (alturaM * alturaM);
  return imc.toFixed(2);
}

function renderizarTabla() {
  cuerpoTabla.innerHTML = "";

  for (let i = 0; i < personas.length; i++) {
    const persona = personas[i];
    const fila = document.createElement("tr");

    fila.innerHTML =
      "<td>" + persona.nombre + "</td>" +
      "<td>" + persona.apellido + "</td>" +
      "<td>" + persona.edad + "</td>" +
      "<td>" + persona.altura + "</td>" +
      "<td>" + persona.peso + "</td>" +
      "<td>" + persona.imc + "</td>" +
      "<td></td>";

    const celdaBoton = fila.querySelector("td:last-child");
    const btnQuitar = document.createElement("button");
    btnQuitar.textContent = "Quitar";

    btnQuitar.addEventListener("click", function () {
      personas.splice(i, 1);
      renderizarTabla();
    });

    celdaBoton.appendChild(btnQuitar);
    cuerpoTabla.appendChild(fila);
  }
}

formPersona.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const edad = Number(document.getElementById("edad").value);
  const altura = Number(document.getElementById("altura").value);
  const peso = Number(document.getElementById("peso").value);

  if (nombre === "" || apellido === "" || altura <= 0 || peso <= 0) {
    alert("Completá todos los campos correctamente.");
    return;
  }

  const imc = calcularIMC(peso, altura);

  personas.push({
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    altura: altura,
    peso: peso,
    imc: imc,
  });

  renderizarTabla();
  formPersona.reset();
});