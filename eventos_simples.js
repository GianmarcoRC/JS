const palabra = document.getElementById("palabra");
const texto = document.getElementById("texto");
const salida = document.getElementById("salida");
const start = document.getElementById("start");

const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const azul = document.getElementById("azul");
const dorado = document.getElementById("dorado");

let bloque = "";

function iniciarPagina() {
  dorado.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
}

function buscarPalabra() {
  let palabraAbuscar = palabra.value;
  let textocompleto = texto.value;

  let hayPalabra = textocompleto.indexOf(palabraAbuscar);

  if (hayPalabra != -1) {
    salida.innerText = "hay palabra";
  } else {
    salida.innerText = "Palabra no existente";
  }
}

function pasarPorEncima(micolor) {
  let mibloque = micolor == null ? bloque : micolor;
  switch (mibloque) {
    case "rojo":
      salida.innerText = "Estás encima del rojo";
      break;
    case "verde":
      salida.innerText = "Has salido del verde";
      break;
    case "azul":
      salida.innerText = "Has entrado en el azul";
      break;
    case "dorado":
      salida.innerText = "Has pulsado el botón derecho del dorado";
      break;
    default:
      salida.innerText = "";
  }
}

start.addEventListener("click", buscarPalabra);
palabra.addEventListener("keyup", () => {
  palabra.style.backgroundColor = "lightpink";
  setTimeout(() => {
    palabra.style.backgroundColor = "white";
  }, 1000);
});

rojo.addEventListener("mouseover", () => {
  bloque = "rojo";
  pasarPorEncima();
});

verde.addEventListener("mouseleave", () => {
  bloque = "verde";
  pasarPorEncima();
});

azul.addEventListener("mouseenter", () => {
  bloque = "azul";
  pasarPorEncima();
});

dorado.addEventListener("contextmenu", pasarPorEncima.bind(this, "dorado"));

//iniciarPagina();
