// Array para organizar los datos
const comercialesPorProvincia = {
    Madrid: [],
    Sevilla: [],
    Valencia: [],
    Murcia: []
  };
  
  
  // Dividir los datos por provincia
  const lineas = listacomerciales.split("\n");
  lineas.forEach((linea) => {
    const [nombre, provincia, empresa] = linea.split(",").map((campo) => campo.trim());
    if (comercialesPorProvincia[provincia]) {
      comercialesPorProvincia[provincia].push({ nombre, empresa });
    }
  });
  
  // Lista de empresas válidas
  const empresasValidas = ['toyota', 'microsoft', 'facebook', 'samsung', 'coca-cola'];
  
  // Mapeo de valores de provincias en HTML a las provincias completas
  const provinciasMap = {
    'Mad': 'Madrid',
    'Sev': 'Sevilla',
    'Val': 'Valencia',
    'Mur': 'Murcia'
  };
  
  // Evento de búsqueda
  document.getElementById("btnbuscar").addEventListener("click", () => {
    const empresaInput = document.getElementById("empr").value.trim().toLowerCase();
    const provinciaSelect = document.getElementById("sprov").value.trim();
    const avisos = document.getElementById("avisos");
    const consola = document.getElementById("consola");
  
    // Limpiar avisos y consola
    avisos.innerHTML = "";
    consola.innerHTML = "";
  
    // Validar campos
    if (!empresaInput) {
      avisos.innerHTML = "DEBES INTRODUCIR UNA EMPRESA";
      return;
    }
    if (!provinciaSelect) {
      avisos.innerHTML = "SELECCIONA UNA PROVINCIA";
      return;
    }
  
    // Verificar que la empresa es válida
    if (!empresasValidas.includes(empresaInput)) {
      avisos.innerHTML = "EMPRESA NO VÁLIDA";
      return;
    }
  
    // Mapeo de provincia seleccionada
    const provinciaCompleta = provinciasMap[provinciaSelect];
    if (!provinciaCompleta) {
      avisos.innerHTML = "PROVINCIA NO VÁLIDA";
      return;
    }
  
    // Buscar comerciales en la provincia y empresa seleccionadas
    const comerciales = comercialesPorProvincia[provinciaCompleta];
    const resultados = comerciales.filter(({ empresa }) => empresa.toLowerCase().includes(empresaInput));
  
    // Mostrar resultados
    if (resultados.length > 0) {
      let resultadoHTML = "";
      resultados.forEach(({ nombre, empresa }) => {
        resultadoHTML += `<p>${nombre} - ${empresa} - ${provinciaCompleta}</p>`;
      });
      consola.innerHTML = resultadoHTML;
    } else {
      avisos.innerHTML = "NO HAY COMERCIALES EN ESA PROVINCIA";
    }
  });
  