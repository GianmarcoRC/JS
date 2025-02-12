const pets = [
  { id: 1, owner: "Teodoro", age: 6, dog_name: "Daisy" },
  { id: 2, owner: "Ker", age: 16, dog_name: "Charlie" },
  { id: 3, owner: "Demott", age: 18, dog_name: "Lucy" },
  { id: 4, owner: "Tybie", age: 3, dog_name: "Charlie" },
  { id: 5, owner: "Lydia", age: 4, dog_name: "Cooper" },
  { id: 6, owner: "Wileen", age: 16, dog_name: "Bailey" },
  { id: 7, owner: "Lilia", age: 4, dog_name: "Daisy" },
  { id: 8, owner: "Melony", age: 10, dog_name: "Cooper" },
  { id: 9, owner: "Dana", age: 12, dog_name: "Molly" },
  { id: 10, owner: "Sheffield", age: 4, dog_name: "Molly" },
  { id: 11, owner: "Vania", age: 4, dog_name: "Lucy" },
  { id: 12, owner: "Garret", age: 18, dog_name: "Lucy" },
  { id: 13, owner: "Mathe", age: 11, dog_name: "Cooper" },
  { id: 14, owner: "Muffin", age: 12, dog_name: "Rocky" },
  { id: 15, owner: "Brnaby", age: 20, dog_name: "Max" },
  { id: 16, owner: "Beilul", age: 9, dog_name: "Bailey" },
  { id: 17, owner: "Gardner", age: 14, dog_name: "Cooper" },
  { id: 18, owner: "Carroll", age: 15, dog_name: "Sadie" },
  { id: 19, owner: "Debora", age: 2, dog_name: "Rocky" },
  { id: 20, owner: "Mahmoud", age: 8, dog_name: "Molly" },
];

const btnStart = document.getElementById("show");

function selectByAge(a) {
  let petsByAge = [];
  for (let n = 0; n < pets.length; n++) {
/* el condicional esta mal debe ser if(pets[n].age < a) ay que comparar por edad*/   
if (pets[n].age < a) petsByAge.push(pets[n]);
  }
  return petsByAge;
}

function writeList(l) {
  let listado = "";
  for (let n = 0; n < l.length; n++) {
    listado += "<p>";
    listado += l[n].id + ":   ";
   /**Debe ser listado += "es de" + l[n].owner + ", "*/ 
   listado = " es de " + l[n].owner + ",   ";
    listado += " tiene" + l[n].age + " años ";
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
   /**Debe ser tablero += "<tr>"*/ listado += "</tr>";
  }
  listado += "</table>";
  document.getElementById("listado").innerHTML = listado;
}

function write() {
  let isAge = document.querySelector('input[name="age"]:checked');
  let a = isAge ? isAge.value : 0;

  /**Hay que pasarle el valor */ let petList = selectByAge(a);

  const listType = document.getElementById("displaymode");
  let ltype = listType.options[listType.selectedIndex].value;

  if (ltype == 1) writeList(listado);
  if (ltype == 2) writeTable(tablero);
}

/**No existe la variable escribir*/ 
btnStart.addEventListener("click", write);
