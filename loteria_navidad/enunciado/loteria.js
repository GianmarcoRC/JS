
document.addEventListener("DOMContentLoaded", function () {
  const tipoPremio = document.querySelectorAll('input[name="premio"]');
  const tipoPremioTexto = document.getElementById("tipopremio");
  const numeroPremio = document.querySelectorAll(".numero");
  const importePremio = document.getElementById("importe");
  const provinciasPremio = document.getElementById("provincias");
  const verQuintos = document.getElementById("verquintos");
  const listadoQuintos = document.getElementById("listadoquintos");
  const buscapornumero = document.getElementById("buscapornumero");
  const buscaporterminacion = document.getElementById("buscaporterminacion");
  const mensajes = document.getElementById("mensajes");
  const botonAnimacion = document.getElementById("animations");
  const botonLimpiar = document.getElementById("cleaner");
  const tablas = document.querySelectorAll('.listado');

  let intervaloAnimacion;
  let animacionActiva = false;

  const primerPremio = listapremios.find(premio => premio.premio === 400000);
  const segundoPremio = listapremios.find(premio => premio.premio === 125000); 
  const tercerPremio = listapremios.find(premio => premio.premio === 50000);

  const premios = {
    1: {
      numero: primerPremio.numero,
      importe: primerPremio.premio + " €",
      provincias: primerPremio.provincia ? primerPremio.provincia.join(", ") : "No disponible"
    },
    2: {
      numero: segundoPremio.numero, 
      importe: segundoPremio.premio + " €",
      provincias: segundoPremio.provincia ? segundoPremio.provincia.join(", ") : "No disponible"
    },
    3: {
      numero: tercerPremio.numero,
      importe: tercerPremio.premio + " €", 
      provincias: tercerPremio.provincia ? tercerPremio.provincia.join(", ") : "No disponible"
    }
  };

  tipoPremio.forEach(radio => {
    radio.addEventListener("change", function() {
      const premioSeleccionado = this.value;
      mostrarPremio(premioSeleccionado);
    });
  });

  function mostrarPremio(premioSeleccionado) {
    tipoPremioTexto.textContent = `${premioSeleccionado}º premio`;
    
    const premio = premios[premioSeleccionado];
    if (premio) {
      const numero = premio.numero;
      
      for (let i = 0; i < numero.length; i++) {
        numeroPremio[i].textContent = numero[i];
      }
      
      for (let i = numero.length; i < numeroPremio.length; i++) {
        numeroPremio[i].textContent = " ";
      }

      importePremio.textContent = premio.importe;
      provinciasPremio.textContent = premio.provincias;
    }
  }

  function toggleAnimacion() {
    if (animacionActiva) {
      clearInterval(intervaloAnimacion);
      tablas.forEach(tabla => tabla.classList.remove('puntos'));
      botonAnimacion.textContent = 'Activar animación';
    } else {
      intervaloAnimacion = setInterval(() => {
        tablas.forEach(tabla => tabla.classList.toggle('puntos'));
      }, 500);
      botonAnimacion.textContent = 'Desactivar animación';
    }
    animacionActiva = !animacionActiva;
  }

  botonAnimacion.addEventListener('click', toggleAnimacion);

  buscapornumero.addEventListener("input", function() {
    const numero = this.value;
    if (numero.length === 5) {
      const premio = buscarPremio(numero);
      mostrarResultadoBusqueda(premio);
    }
  });

  function buscarPremio(numero) {
    return listapremios.find(premio => premio.numero === numero);
  }

  function mostrarResultadoBusqueda(premio) {
    if (premio) {
      mensajes.textContent = `El número ${premio.numero} tiene un premio de ${premio.premio}€`;
    } else {
      mensajes.textContent = "Este número no tiene premio";
    }
  }

  buscaporterminacion.addEventListener("change", function() {
    const cifras = parseInt(this.value);
    if (cifras) {
      mostrarPremiosTerminacion(cifras);
    }
  });

  function mostrarPremiosTerminacion(cifras) {
    const terminaciones = listapremios.filter(premio => {
      const terminacion = premio.numero.slice(-cifras);
      return premio.premio >= 100;
    });

    if (terminaciones.length > 0) {
      let html = "<table class='listado'><tr><td>Número</td><td>Premio</td></tr>";
      terminaciones.forEach(premio => {
        //Me entero mas con esto que coon el create element
        html += `<tr><td class="boleto">${premio.numero}</td><td class="boleto">${premio.premio}€</td></tr>`;
      });
      html += "</table>";
      listadoQuintos.innerHTML = html;
      listadoQuintos.style.visibility = "visible";
    } else {
      mensajes.textContent = "No hay premios con esa terminación";
    }
  }

  verQuintos.addEventListener("click", function() {
    if (!listadoQuintos.querySelector("table")) {
      const quintosPremios = listapremios.filter(premio => 
        premio.premio >= 100 && premio.premio <= 6000
      ).sort((a, b) => b.premio - a.premio);

      let html = "<table class='listado'>";
      html += "<tr><td class='listado'>Número</td><td class='listado'>Premio</td><td class='listado'>Provincias</td></tr>";
      
      quintosPremios.forEach(premio => {
        html += `<tr>
          <td class="boleto"><strong>${premio.numero}</strong></td>
          <td class="boleto">${premio.premio}€</td>
          <td class="boleto">${premio.provincia ? premio.provincia.join(", ") : "No disponible"}</td>
        </tr>`;
      });
      
      html += "</table>";
      listadoQuintos.innerHTML = html;
      listadoQuintos.style.visibility = "visible";
    }
  });

  botonLimpiar.addEventListener("click", function() {
    tipoPremioTexto.textContent = "";
    numeroPremio.forEach(celda => celda.textContent = "");
    importePremio.textContent = "";
    provinciasPremio.textContent = "";
    mensajes.textContent = "";
    listadoQuintos.innerHTML = "";
    listadoQuintos.style.visibility = "hidden";
    buscapornumero.value = "";
    buscaporterminacion.value = "";
    tipoPremio.forEach(radio => radio.checked = false);
  });

});