const pets = [...]; // array de objetos

const btnStart = document.getElementById("show");

function selectByAge(a) {
  let petsByAge = [];
  for (let n = 0; n < pets.length; n++) {
    if (pets[n].age < a) petsByAge.push(pets[n]);
  }
  return petsByAge;
}

function writeList(l) {
  let listado = "";
  for (let n = 0; n < l.length; n++) {
    listado += "<p>";
    listado += l[n].id + ":   ";
    listado += " es de " + l[n].owner + ",   ";
    listado += " tiene " + l[n].age + " años ";
    listado += " y se llama " + l[n].dog_name;
    listado += "</p>";
  }
  document.getElementById("listado").innerHTML = listado;
}

function writeTable(l) {
  let tablero = "<table>";
  for (let n = 0; n < l.length; n++) {
    tablero += "<tr>";
    tablero += "<td>" + l[n].id + "</td>";
    tablero += "<td>" + l[n].owner + "</td>";
    tablero += "<td>" + l[n].age + "</td>";
    tablero += "<td>" + l[n].dog_name + "</td>";
    tablero += "</tr>";
  }
  tablero += "</table>";
  document.getElementById("listado").innerHTML = tablero;
}

function write() {
  let isAge = document.querySelector('input[name="age"]:checked');
  let a = isAge ? parseInt(isAge.value) : 0;

  let petList = selectByAge(a);

  const listType = document.getElementById("displaymode");
  let ltype = listType.options[listType.selectedIndex].value;

  if (ltype == 1) writeList(petList);
  if (ltype == 2) writeTable(petList);
}

btnStart.addEventListener("click", write);