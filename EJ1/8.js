const clave = prompt("Introduce una clave nueva:");
let intentos = 0;
while (true) {
  const claveIntroducida = prompt(`Introduce la clave correcta: ${intentos}`);
  if (claveIntroducida == clave) {
    alert("Clave correcta!");
    break;
  } else {
    intentos++;
    if (intentos >= 3) {
        alert(`Clave incorrecta. Intentos: ${intentos}`);}
    }
}