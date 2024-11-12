// Realiza un programa que mediante eventos y el uso del objeto event, te muestre en todo momento la posición actual del ratón en
// pantalla. Para mostrarlo modificaremos de forma dinámica un elemento HTML (Ejemplo, un <p>) que nos muestre la posición
// actual del ratón

const app = document.getElementById('mouse-position');

// Evento que se activa cuando el ratón se mueve

window.addEventListener('mousemove', (event) => {
  // Obtenemos las coordenadas del ratón en la pantalla
  const x = event.clientX;
  const y = event.clientY;

  // Creamos un mensaje con las coordenadas del ratón
  const message = `Posición del ratón: X: ${x}, Y: ${y}`;

  // Modificamos el texto del elemento HTML que muestra la posición del ratón
  app.textContent = message;
});
