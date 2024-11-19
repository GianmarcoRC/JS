const textArea = document.getElementById('text');
const buscarletra = document.getElementById('buscar');
const cambiar = document.getElementById('cambiar');
const cambiarprimera = document.getElementById('cambiar-primera');
const reemplazartodo = document.getElementById('cambiar-todo');
const botoninteractivo = document.getElementById('interactivo-cambio');

// 1. Buscar la primera ocurrencia y sustituir.
cambiarprimera.addEventListener('click', (event) => {
  event.preventDefault(); // Evitar que el formulario se envíe
  const buscartexto = buscarletra.value;
  const reemplazartexto = cambiar.value;
  const text = textArea.value;
  const index = text.indexOf(buscartexto);
  if (index !== -1) {
    textArea.value = text.substring(0, index) + reemplazartexto + text.substring(index + buscartexto.length);
  } else {
    alert('La palabra no se encuentra en el texto.');
  }
});

// 2. Buscar todas las ocurrencias y sustituirlas.
reemplazartodo.addEventListener('click', (event) => {
  event.preventDefault(); 
  const buscartexto = buscarletra.value;
  const reemplazartexto = cambiar.value;
  let text = textArea.value; // Cambiar de const a let porque la const no se puede cambiar
  let count = 0;
  
  // 3. Buscar todas las ocurrencias y contarlas mientras se reemplazan.
  while (text.includes(buscartexto)) {
    text = text.replace(buscartexto, reemplazartexto);
    count++;
  }
  
  textArea.value = text; // Actualizar el valor en el textarea
  alert(`Replaced ${count} occurrences.`);
});

// 4. Preguntar en cada ocurrencia si sustituye.
botoninteractivo.addEventListener('click', (event) => {
  event.preventDefault(); 
  const buscartexto = buscarletra.value;
  const reemplazartexto = cambiar.value;
  let text = textArea.value; 
  let count = 0;
  let index = text.indexOf(buscartexto);
  
  // Ciclo para encontrar todas las ocurrencias
  while (index !== -1) {
    if (buscartexto === "" && reemplazartexto === "" && count === 0){
        alert("No se puede buscar una cadena vacía.");
        break;
    }

    const respuesta = confirm(`Cambiar '${buscartexto}' con '${reemplazartexto}' en la posicion ${index}?`);
    if (respuesta) {
      // Si el usuario acepta, hacemos el reemplazo
      text = text.substring(0, index) + reemplazartexto + text.substring(index + buscartexto.length);
      count++;
    }
    // Buscar la siguiente ocurrencia
    index = text.indexOf(buscartexto, index + reemplazartexto.length);
  }
  
  textArea.value = text; // Actualizar el valor en el textarea
  alert(`Cambiar ${count} ocurrencias.`);
});

