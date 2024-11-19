const edadLuis = parseInt(prompt("Introduce la edad de Luis:"));
const edadAna = parseInt(prompt("Introduce la edad de Ana:"));

if (isNaN(edadLuis) || isNaN(edadAna)) {
  alert("Error: no se introdujeron números");
} else if (edadLuis < 0 || edadAna < 0 || edadLuis > 120 || edadAna > 120) {
  alert("Error: edades no válidas");
} else {
  const esMayorDeEdad = edad => edad >= 18;
  const esJubilado = edad => edad >= 65;

  alert(`La edad de Luis es ${edadLuis} y la edad de Ana es ${edadAna}`);
  alert(`Luis es ${esMayorDeEdad(edadLuis) ? "mayor de edad" : "menor de edad"}`);
  alert(`Ana es ${esMayorDeEdad(edadAna) ? "mayor de edad" : "menor de edad"}`);
  alert(`Luis no ${esJubilado(edadLuis) ? "jubilado" : "es jubilado"}`);
  alert(`Ana no ${esJubilado(edadAna) ? "jubilada" : "es jubilada"}`);
}