const literal = "Final del Campeonato <br> 14 noviembre";
const starcolor = "gold";
const defaultcolor = "rgb(212, 212, 208)";

let intervalo; // Variable para controlar el carrusel
let posicion = 1; // Control de posiciones en el carrusel

const startBtn = document.getElementById("start");
const keyColorPanel = document.getElementById("keycolor");
const colorSelect = document.getElementById("scolor");
const carrusel = document.getElementById("carrusel");
const avisos = document.getElementById("avisos");

// 1. Mostrar panel de selección de colores al pulsar "Comenzar"
startBtn.addEventListener("click", () => {
  if (startBtn.innerText === "Comenzar") {
    keyColorPanel.style.visibility = "visible";
    avisos.innerHTML = "";
  } else {
    detenerCarrusel();
  }
});

// 2. Validar si el color es "dorado"
colorSelect.addEventListener("change", () => {
  const colorElegido = colorSelect.value;

  if (colorElegido !== "dorado") {
    avisos.innerHTML = "<strong>OPCIÓN NO VÁLIDA</strong>";
    return;
  }

  // 3. Configuración cuando el color es correcto
  iniciarCarrusel();
});

// Función para iniciar el carrusel
function iniciarCarrusel() {
  avisos.innerHTML = "";
  keyColorPanel.style.visibility = "hidden";
  carrusel.style.visibility = "visible";

  startBtn.innerText = "Parar anuncios";

  // Limpiar carrusel y arrancar el intervalo
  limpiarCarrusel();
  intervalo = setInterval(rotarAnuncio, 500);
}

// Función para detener el carrusel y restaurar el estado inicial
function detenerCarrusel() {
  clearInterval(intervalo);
  posicion = 1;

  startBtn.innerText = "Comenzar";
  keyColorPanel.style.visibility = "hidden";
  carrusel.style.visibility = "hidden";
  limpiarCarrusel();
  avisos.innerHTML = "";
}

// Función para rotar el anuncio entre las posiciones
function rotarAnuncio() {
  limpiarCarrusel();

  const diaActual = document.getElementById(`dia${posicion}`);
  diaActual.style.backgroundColor = starcolor;
  diaActual.innerHTML = literal;

  // Actualizar posición
  posicion = posicion === 4 ? 1 : posicion + 1;
}

// Función para limpiar el carrusel
function limpiarCarrusel() {
  for (let i = 1; i <= 4; i++) {
    const dia = document.getElementById(`dia${i}`);
    dia.style.backgroundColor = defaultcolor;
    dia.innerHTML = "";
  }
}
