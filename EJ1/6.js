const clave = "1234";
let intentos = 0;
while (true) {
  const claveIntroducida = prompt("Introduce la clave:");
  if (claveIntroducida === clave) {
    alert("Clave correcta!");
    break;
  } else {
    intentos++;
    alert(`Clave incorrecta. Intentos: ${intentos}`);
  }
}