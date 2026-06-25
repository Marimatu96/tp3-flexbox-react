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