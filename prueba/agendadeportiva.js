// Variables para el carrusel
const anuncios = [
    "Final del Campeonato",
    "Evento de Fútbol",
    "Maratón Anual",
    "Torneo de Tenis"
  ];
  
  const starcolor = "gold"; // Color que activa el carrusel
  const defaultcolor = "rgb(212, 212, 208)"; // Color por defecto
  
  let intervalo;
  let indice = 0;
  let activo = false;
  
  // Elementos del DOM
  const startButton = document.getElementById("start");
  const keyColorDiv = document.getElementById("keycolor");
  const avisosDiv = document.getElementById("avisos");
  const carruselDivs = document.getElementsByClassName("evento");
  
  // Función para comenzar o detener el anuncio
  startButton.addEventListener("click", function() {
    if (!activo) {
      // Mostrar el panel de colores
      keyColorDiv.style.visibility = "visible";
      startButton.textContent = "Parar anuncios";
      activo = true;
      avisosDiv.textContent = ""; // Limpiar avisos
    } else {
      // Detener el anuncio
      clearInterval(intervalo);
      reset();
    }
  });
  
  // Función para manejar el clic en los colores
  const cuadraditos = document.getElementsByClassName("cuadradito");
  for (let i = 0; i < cuadraditos.length; i++) {
    cuadraditos[i].addEventListener("click", function() {
      if (this.id === "dorado") {
        // Iniciar el carrusel
        iniciarCarrusel();
      } else {
        avisosDiv.textContent = "OPCIÓN NO VÁLIDA";
      }
    });
  }
  
  // Función para iniciar el carrusel
  function iniciarCarrusel() {
    keyColorDiv.style.visibility = "hidden"; // Ocultar el panel de colores
    for (let i = 0; i < carruselDivs.length; i++) {
      carruselDivs[i].style.backgroundColor = defaultcolor; // Limpiar colores de fondo
      carruselDivs[i].textContent = ""; // Limpiar texto
    }
  
    // Hacer visible el carrusel
    document.getElementById("carrusel").style.visibility = "visible";
  
    // Mostrar el primer anuncio
    carruselDivs[indice].style.backgroundColor = starcolor; // Usar color dorado
    carruselDivs[indice].textContent = anuncios[indice]; // Texto del anuncio
    indice++; // Mover al siguiente índice
    avisosDiv.textContent = "";
    intervalo = setInterval(() => {
      // Actualizar el carrusel
      actualizarCarrusel();
    }, 500);
  }
  
  // Función para actualizar el carrusel
  function actualizarCarrusel() {
    // Limpiar el espacio actual
    carruselDivs[(indice - 1) % carruselDivs.length].style.backgroundColor = defaultcolor;
    carruselDivs[(indice - 1) % carruselDivs.length].textContent = "";
  
    // Incrementar el índice y volver a 0 si es necesario
    indice = indice % carruselDivs.length;
  
    // Establecer el nuevo anuncio
    carruselDivs[indice].style.backgroundColor = starcolor; // Usar color dorado
    carruselDivs[indice].textContent = anuncios[indice]; // Texto del anuncio
    indice++; // Mover al siguiente índice
  }
  
  // Función para reiniciar el estado
  function reset() {
    startButton.textContent = "Comenzar";
    keyColorDiv.style.visibility = "hidden";
    avisosDiv.textContent = "";
    indice = 0;
    activo = false;
    for (let i = 0; i < carruselDivs.length; i++) {
      carruselDivs[i].style.backgroundColor = defaultcolor; // Limpiar colores de fondo
      carruselDivs[i].textContent = ""; // Limpiar texto
    }
    document.getElementById("carrusel").style.visibility = "hidden"; // Ocultar el carrusel
  }