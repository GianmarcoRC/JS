/* Variables y constantes del programa */

let intervalo = 0;
let estadoTablas = "OFF";

/* Objetos a utilizar en el programa */

const btnanime = document.getElementById("animations");
const btncleaner = document.getElementById("cleaner");
const verquintos = document.getElementById("verquintos");

const tipoPremio = document.getElementsByName("premio");
const titulopremio = document.getElementById("tipopremio");
const numeros = document.getElementsByClassName("numero");
const importe = document.getElementById("importe");
const provincias = document.getElementById("provincias");

const listadoquintos = document.getElementById("listadoquintos");
const listabusqueda = document.getElementById("listabusqueda");

const findnumber = document.getElementById("buscapornumero");
const nterminacion = document.getElementById("buscaporterminacion");

const mensajes = document.getElementById("mensajes");

// const tablasAnimadas = document.querySelectorAll("table.listado");

let tablasAnimadas; 

/* Asignación de eventos */

tipoPremio.forEach((e) => e.addEventListener("click", buscarPrimerosPremios));

btnanime.addEventListener("click", activarAnimacion);

verquintos.addEventListener("click", mostrarQuintos);

findnumber.addEventListener("keyup", buscarNumero);

nterminacion.addEventListener("click", buscarTerminacion);

/* Funciones genéricas */

let buscaPorPremio = (p) => {
  return listapremios.find((n) => n.premio == p);
};

let buscaPorNumero = (n) => {
  return listapremios.find((p) => p.numero == n);
};

let buscarPorTerminacion = (n, t) => {
  return listapremios.filter((p) => p.numero.slice(n) == t);
};

let switchTables = () => {
  if (estadoTablas == "OFF") {
    estadoTablas = "ON";
    Array.from(tablasAnimadas).forEach((t) => t.classList.add("puntos"));
  } else {
    estadoTablas = "OFF";
    Array.from(tablasAnimadas).forEach((t) => t.classList.remove("puntos"));
  }
};

function fillTable(lista, donde) {
  donde.style.visibility = "visible";

  /* Creación de la tabla */

  let tb = document.createElement("table");
  tb.classList.add("listado");

  /* Creación de la primera fila */

  let row = document.createElement("tr");
  let cell = null;
  let titulos = ["Número", "Premiado con", "Vendido en"];
  for (let t in titulos) {
    cell = document.createElement("td");
    cell.classList.add("listado");
    cell.innerText = titulos[t];
    row.appendChild(cell);
  }
  tb.appendChild(row);

  /* Resto de filas */

  lista.forEach((record, i) => {
    if (i < 20) {
      row = document.createElement("tr");
      for (let c in record) {
        if (c != "serie") {
          cell = document.createElement("td");
          cell.classList.add("boleto");
        }

        switch (c) {
          case "numero":
            cell.innerText = record[c];
            cell.style.fontWeight = "bold";
            break;
          case "premio":
            cell.innerText = record[c] + " €";
            break;
          case "provincia":
            if (record[c] == null || record[c].length == 0) {
              cell.innerText = "Vendido en toda España";
            } else {
              cell.innerText = record[c].join(", ");
            }
            break;
          default:
            break;
        }
        row.appendChild(cell);
      }
      tb.appendChild(row);
    }
  });

  /* Añadir las filas a la tabla */
  donde.appendChild(tb);
}

/* Funciones activadas por eventos */

function buscarPrimerosPremios() {
  let tipop = document.querySelector('input[type="radio"]:checked');
  let premiado;
  let titulo = "";

  switch (tipop.value) {
    case "1":
      premiado = buscaPorPremio(400000);
      titulo = "Primer premio";
      break;
    case "2":
      premiado = buscaPorPremio(125000);
      titulo = "Segundo premio";
      break;
    case "3":
      premiado = buscaPorPremio(50000);
      titulo = "Tercer premio";
      break;
    default:
      console.log("Búsqueda de primeros premios incorrecta");
      break;
  }
  console.log("buscaPrimerosPremios: " + premiado);

  titulopremio.innerText = titulo;
  Array.from(numeros).forEach(
    (n, i) => (n.innerText = premiado.numero.charAt(i))
  );
  importe.innerText = `${premiado.premio} €`;
  provincias.innerText = `${premiado.provincia.join(", ")}`;
//  tipop.checked = false;
}

function activarAnimacion() {
  tablasAnimadas = document.querySelectorAll("table.listado");

  btnanime.innerText = "Desactivar animación";
  btnanime.removeEventListener("click", activarAnimacion);
  btnanime.addEventListener("click", desactivarAnimacion);
  intervalo = setInterval(switchTables, 500);
}

function desactivarAnimacion() {
  btnanime.innerText = "Activar animación";
  btnanime.removeEventListener("click", desactivarAnimacion);
  btnanime.addEventListener("click", activarAnimacion);
  clearInterval(intervalo);
  Array.from(tablasAnimadas).forEach((t) => t.classList.remove("puntos"));
  estadoTablas = "OFF";
}

function mostrarQuintos() {
  let listaquintos = [];

  listadoquintos.innerHTML = "";
  listapremios.forEach((record) => {
    if (record.premio > 100) listaquintos.push(record);
  });
  listadoquintos.style.visibility = "visible";
  listaquintos.sort((r1, r2) => r2.premio - r1.premio);
  fillTable(listaquintos, listadoquintos);
}

function buscarNumero() {
  let premiado;
  let listapremiado = [];

  let numero = findnumber.value;
  let lennumero = numero.length;

  listabusqueda.innerHTML = "";

  if (lennumero < 5) {
    findnumber.style.backgroundColor = "pink";
    mensajes.innerText = "Escribe un número con cinco dígitos";
  } else {
    findnumber.style.backgroundColor = "lightgreen";
    mensajes.innerText = "";

    premiado = buscaPorNumero(findnumber.value);
    if (premiado == undefined) {
      mensajes.innerText = `El número ${numero} no tiene premio`;
    } else {
      console.log(premiado);
      listapremiado.push(premiado);
      fillTable(listapremiado, listabusqueda);
    }
  }
}

function buscarTerminacion() {
  let listapremiados = [];

  let ind = nterminacion.selectedIndex;
  let ndigitos = nterminacion.options[ind].value;

  let numero = findnumber.value;
  let cifras;

  listabusqueda.innerHTML = "";

  if (ind == 0) {
    mensajes.innerText = "Selecciona cuántas cifras hay que comprobar";
    return;
  }
  if (parseInt(ndigitos) > numero.length) {
    mensajes.innerText = "No hay dígitos suficientes para la terminación";
    return;
  }
  switch (ndigitos) {
    case "1":
      cifras = numero.slice(-1);
      listapremiados = buscarPorTerminacion(-1, cifras);
      break;
    case "2":
      cifras = numero.slice(-2);
      listapremiados = buscarPorTerminacion(-2, cifras);
      break;
    case "3":
      cifras = numero.slice(-3);
      listapremiados = buscarPorTerminacion(-3, cifras);
      break;

    default:
      break;
  }
  if (listapremiados.length == 0) {
    mensajes.innerText = `La terminación ${cifras} no tiene premio`;
  } else {
    console.log(listapremiados);
    fillTable(listapremiados, listabusqueda);
  }
}

/* Inicio de la página */

// fillTable(listapremios, listabusqueda);
