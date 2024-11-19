//Gianmarco Rodriguez Cipriani
const marcador = document.getElementById('crono');
const posiciones = document.getElementById('posiciones');
let mensajes = document.getElementById('mensajes');
let contadorJugadas = 0;
const maxJugadas = 10;
let timerId;
let timeLeft = 60
pintarTablero();

function pintarTablero() {
    const tablero = document.getElementById('tablero');
    tablero.innerHTML = ''; 

    for (let i = 0; i < 20; i++) {
        let fila = document.createElement('tr');
        fila.className = 'fila';
        tablero.appendChild(fila);

        for (let j = 0; j < 20; j++) {
            let celda = document.createElement('td');
            celda.className = 'celda';
            fila.appendChild(celda);
        }
    }
}
function empezartiempo() {
    timeLeft = 60;
    marcador.innerText = `${timeLeft} segundos restantes`;
    timerId = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timerId);
            alert("¡Tiempo terminado!");
            endGame();
        } else {
            marcador.innerText = `${timeLeft} segundos restantes`;
        }
        timeLeft -= 1;
    }, 1000);
}

let llaveX, llaveY;

function generarLlave() {
    const celdas = document.getElementsByClassName('celda');
    for (let celda of celdas) {
        celda.classList.remove('llave');
    }

    llaveX = Math.floor(Math.random() * 20);
    llaveY = Math.floor(Math.random() * 20);

    console.log(`Llave generada en la posición: (${llaveX + 1}, ${llaveY + 1})`);
}
function leerPosiciones() {
    let posicion = posiciones.value; 
    if (posicion === '') {
        mensajes.innerText = "No has introducido ninguna posición.";
        return;
    }

    let coordenadas = posicion.split('\n');
    if (coordenadas.length !== 5) {
        mensajes.innerText = "Debes introducir cinco posiciones válidas.";
        return;
    }

    for (let i = 0; i < coordenadas.length; i++) {
        let [x, y] = coordenadas[i].split(',');
        x = parseInt(x) - 1;
        y = parseInt(y) - 1;

        if (isNaN(x) || isNaN(y) || x < 0 || x >= 20 || y < 0 || y >= 20) {
            mensajes.innerText = "Posición fuera de rango o inválida.";
            return;
        }

        calcularDistancia(x, y);

        let celda = document.getElementsByClassName('fila')[x].children[y];
        celda.classList.add('intento');
        if (x === llaveX && y === llaveY) {
            mensajes.innerText = `¡Has encontrado la llave en la jugada ${i + 1}!`;
            alert("¡Has encontrado la llave!");
            endGame();
            return;
        } else {
            mensajes.innerText += `Has introducido la posición: ${coordenadas[i]}\n`;
        }
    }

    contadorJugadas++;
    if (contadorJugadas >= maxJugadas) {
        mensajes.innerText += "Has consumido todas las jugadas.";
        endGame();
    }

    posiciones.value = '';  
}

function calcularDistancia(x1, y1) {
    const distancia = Math.sqrt(Math.pow(llaveX - x1, 2) + Math.pow(llaveY - y1, 2));
    console.log(`La distancia entre las coordenadas (${x1 + 1}, ${y1 + 1}) y la llave es ${distancia}`);
    mensajes.innerText += `La distancia entre (${x1 + 1}, ${y1 + 1}) y la llave es ${distancia.toFixed(2)}.\n`; //Fixed hace que me devuelva solo 2 decimales
}
function endGame() {
    clearInterval(timerId);
    contadorJugadas = 0;
    timeLeft = 0;
    mensajes.innerText += "\nEl juego ha terminado.";
}

function start() {
    mensajes.innerText = "Tienes 1 minuto para encontrar la llave";
    contadorJugadas = 0;
    empezartiempo();
    generarLlave();
}
function buscarLlave() {
    leerPosiciones();
}

