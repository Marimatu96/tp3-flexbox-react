const razas = [
  { nombre: "Labrador", tamano: "Grande", caracter: "Amigable y muy activo" },
  { nombre: "Caniche", tamano: "Pequeño", caracter: "Inteligente y enérgico" },
  { nombre: "Bulldog Francés", tamano: "Pequeño", caracter: "Tranquilo y cariñoso" },
  { nombre: "Pastor Alemán", tamano: "Grande", caracter: "Leal y protector" },
  { nombre: "Beagle", tamano: "Mediano", caracter: "Curioso y sociable" },
  { nombre: "Border Collie", tamano: "Mediano", caracter: "Muy inteligente, gran energía" },
];

const contenedor = document.getElementById("contenedorTarjetas");
const btnOrdenar = document.getElementById("btnOrdenar");
const filtroTamano = document.getElementById("filtroTamano");

function crearTarjeta(raza) {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta");

  const titulo = document.createElement("h3");
  titulo.textContent = raza.nombre;

  const tamano = document.createElement("p");
  tamano.textContent = "Tamaño: " + raza.tamano;

  const caracter = document.createElement("p");
  caracter.textContent = raza.caracter;

  tarjeta.appendChild(titulo);
  tarjeta.appendChild(tamano);
  tarjeta.appendChild(caracter);

  tarjeta.addEventListener("click", function () {
    tarjeta.classList.toggle("resaltada");
  });

  return tarjeta;
}

function renderizarTarjetas(lista) {
  contenedor.innerHTML = "";

  for (let i = 0; i < lista.length; i++) {
    const tarjeta = crearTarjeta(lista[i]);
    contenedor.appendChild(tarjeta);
  }
}

let ordenAscendente = true;

function obtenerListaFiltrada() {
  const tamanoSeleccionado = filtroTamano.value;

  if (tamanoSeleccionado === "todos") {
    return razas;
  }

  return razas.filter(function (raza) {
    return raza.tamano === tamanoSeleccionado;
  });
}

btnOrdenar.addEventListener("click", function () {
  let lista = obtenerListaFiltrada().slice();

  if (ordenAscendente) {
    lista.sort(function (a, b) {
      return a.nombre.localeCompare(b.nombre);
    });
  } else {
    lista.sort(function (a, b) {
      return b.nombre.localeCompare(a.nombre);
    });
  }

  ordenAscendente = !ordenAscendente;
  renderizarTarjetas(lista);
});

filtroTamano.addEventListener("change", function () {
  renderizarTarjetas(obtenerListaFiltrada());
});

renderizarTarjetas(razas);

