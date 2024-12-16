// Contenido del archivo XYZda2d1p_precios.js
document.getElementById("btnbuscar").addEventListener("click", () => {
    const minPrecio = parseFloat(document.getElementById("pricemin").value.trim());
    const maxPrecio = parseFloat(document.getElementById("pricemax").value.trim());
    const avisos = document.getElementById("avisos");
    const consola = document.getElementById("consola");
  
    // Limpiar mensajes anteriores
    avisos.innerHTML = "";
    consola.innerHTML = "";
  
    if (isNaN(minPrecio) || isNaN(maxPrecio)) {
      avisos.innerHTML = "DEBES INTRODUCIR UN RANGO CORRECTO DE PRECIOS";
      return;
    }
  
    avisos.innerHTML = "REALIZANDO BÚSQUEDA. . .";
  
    setTimeout(() => {
      const lineas = productos.split("\n");
      let encontrado = false;
  
      lineas.forEach((linea) => {
        const [id, precioStr, nombre] = linea.split(",");
        const precio = parseFloat(precioStr);
  
        if (!isNaN(precio) && precio >= minPrecio && precio <= maxPrecio) {
          const precioIVA = (precio * 1.21).toFixed(2);
          const precioIVARedondeado = Math.round(precio * 1.21);
  
          consola.innerHTML += `<p>Precio original: ${precio}€, Precio con IVA: ${precioIVA}€</p>`;
          consola.innerHTML += `<p>ID: ${id}, Producto: ${nombre || "Desconocido"}, Precio con IVA: ${precioIVARedondeado}€</p>`;
  
          encontrado = true;
        }
      });
  
      if (!encontrado) {
        avisos.innerHTML = "NO HAY PRODUCTOS EN ESE RANGO DE PRECIOS";
      } else {
        avisos.innerHTML = "";
      }
    }, 2000);
  });