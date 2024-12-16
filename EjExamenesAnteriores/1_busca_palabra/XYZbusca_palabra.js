// Contenido del archivo XYZda2d1a-1i_palabra.js
document.getElementById("btnbuscar").addEventListener("click", () => {
    const inputTexto = document.getElementById("txtin").value.trim();
    const avisos = document.getElementById("avisos");
    const consola = document.getElementById("consola");
  
    // Limpiar mensajes anteriores
    avisos.innerHTML = "";
    consola.innerHTML = "";
  
    if (!inputTexto) {
      avisos.innerHTML = "DEBES INTRODUCIR UN TEXTO A BUSCAR";
      return;
    }
  
    avisos.innerHTML = "REALIZANDO BÚSQUEDA. . .";
  
    setTimeout(() => {
      const lineas = textoinicial.split("\n");
      let encontrado = false;
  
      lineas.forEach((linea, index) => {
        let posicion = linea.indexOf(inputTexto);
        while (posicion !== -1) {
          encontrado = true;
          consola.innerHTML += `<p>Línea ${index + 1}, Posición ${posicion + 1}</p>`;
          posicion = linea.indexOf(inputTexto, posicion + 1);
        }
      });
  
      if (!encontrado) {
        avisos.innerHTML = "ESE TEXTO NO EXISTE";
      } else {
        avisos.innerHTML = "";
      }
    }, 2000);
  });