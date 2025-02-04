// Obtener los datos de desarrolladores
let desarrolladores = [];

// Función para obtener datos de desarrolladores
async function obtenerDesarrolladores() {
  try {
    const respuesta = await fetch('dev_data.json');
    desarrolladores = await respuesta.json();
    mostrarDesarrolladores();
  } catch (error) {
    console.error('Error al cargar desarrolladores:', error);
  }
}

// Alternativa: Asignación directa de JSON
// desarrolladores = JSON.parse(dev_data); // dev_data ya está cargado en el HTML

// Función para crear el elemento de barra para el ranking
function crearBarraRanking(valor) {
  const ancho = valor * 50; // valor * 5 en píxeles
  return `<div class="bar" style="width: ${ancho}px"></div>`;
}

// Función para mostrar desarrolladores
function mostrarDesarrolladores(desarrolladoresFiltrados = null) {
  const devsAMostrar = desarrolladoresFiltrados || desarrolladores;
  const cuerpoTabla = document.querySelector('table:last-of-type tbody') || document.querySelector('table:last-of-type');
  
  // Limpiar filas existentes excepto el encabezado
  const filas = cuerpoTabla.querySelectorAll('tr:not(.titulo)');
  filas.forEach(fila => fila.remove());

  // Mostrar primeros 20 desarrolladores
  devsAMostrar.slice(0, 20).forEach((dev, indice) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${dev.norder}</td>
      <td>${dev.Nombre}</td>
      <td>${dev.Apellido}</td>
      <td>${dev.skills.java || ''}</td>
      <td>${dev.skills.php || ''}</td>
      <td>${dev.skills.sql || ''}</td>
      <td>${dev.sede || ''}</td>
      <td>${crearBarraRanking(dev.value)}</td>
      <td><input type="checkbox" name="chk" id="chk_${dev.norder}" /></td>
    `;
    cuerpoTabla.appendChild(fila);
  });
}

// Funciones de filtrado
function filtrarDesarrolladores() {
  const nivelJava = document.getElementById('javaSelect').value;
  const nivelPhp = document.getElementById('phpSelect').value;
  const nivelSql = document.getElementById('sqlSelect').value;
  const filtroEdad = document.querySelector('input[name="age"]:checked')?.value;

  let filtrados = desarrolladores.filter(dev => {
    // Filtrar por habilidades
    if (nivelJava && nivelJava !== 'Desconocido' && dev.skills.java !== obtenerNivelHabilidad(nivelJava)) return false;
    if (nivelPhp && nivelPhp !== 'Desconocido' && dev.skills.php !== obtenerNivelHabilidad(nivelPhp)) return false;
    if (nivelSql && nivelSql !== 'Desconocido' && dev.skills.sql !== obtenerNivelHabilidad(nivelSql)) return false;

    // Filtrar por edad
    if (filtroEdad) {
      const edad = dev.age;
      if (filtroEdad === '1' && edad > 35) return false;
      if (filtroEdad === '2' && (edad <= 35 || edad > 50)) return false;
      if (filtroEdad === '3' && edad <= 50) return false;
    }

    return true;
  });

  mostrarDesarrolladores(filtrados);
}

// Función auxiliar para convertir niveles de habilidad
function obtenerNivelHabilidad(nivel) {
  const niveles = {
    'low': 'bajo',
    'm': 'medio',
    'h': 'alto',
    'e': 'experto'
  };
  return niveles[nivel];
}

// Manejar acciones de filas seleccionadas
function manejarAccionSeleccionada(accion) {
  const casillasSeleccionadas = document.querySelectorAll('input[name="chk"]:checked');
  
  casillasSeleccionadas.forEach(casilla => {
    const fila = casilla.closest('tr');
    
    switch(accion) {
      case 'highlight':
        fila.style.backgroundColor = '#ffffcc';
        break;
      case 'tempDelete':
        fila.style.display = 'none';
        break;
      case 'permDelete':
        const idDev = parseInt(casilla.id.split('_')[1]);
        desarrolladores = desarrolladores.filter(dev => dev.norder !== idDev);
        fila.remove();
        break;
    }
  });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar datos
  obtenerDesarrolladores();
  
  // Agregar event listeners para filtros
  document.getElementById('javaSelect').addEventListener('change', filtrarDesarrolladores);
  document.getElementById('phpSelect').addEventListener('change', filtrarDesarrolladores);
  document.getElementById('sqlSelect').addEventListener('change', filtrarDesarrolladores);
  document.querySelectorAll('input[name="age"]').forEach(radio => {
    radio.addEventListener('change', filtrarDesarrolladores);
  });

  // Agregar event listeners para botones de acción
  document.getElementById('highlightBtn').addEventListener('click', () => manejarAccionSeleccionada('highlight'));
  document.getElementById('tempDeleteBtn').addEventListener('click', () => manejarAccionSeleccionada('tempDelete'));
  document.getElementById('permDeleteBtn').addEventListener('click', () => manejarAccionSeleccionada('permDelete'));
});