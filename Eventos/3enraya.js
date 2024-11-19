const tablero = document.getElementById('tablero');
const estado = document.getElementById('estado');
let tableroEstado = ['', '', '', '', '', '', '', '', ''];
let jugadorActual = 'X';
let juegoActivo = true;

const condicionesVictoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function manejarClickCelda(indice) {
    if (tableroEstado[indice] === '' && juegoActivo) {
        tableroEstado[indice] = jugadorActual;
        renderizarTablero();
        verificarResultado();
        jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
        estado.innerText = `Turno del jugador: ${jugadorActual}`;
    }
}

function renderizarTablero() {
    tablero.innerHTML = '';
    for (let i = 0; i < tableroEstado.length; i++) {
        const celda = document.createElement('div');
        celda.classList.add('celda');
        celda.innerText = tableroEstado[i];
        celda.addEventListener('click', () => manejarClickCelda(i));
        tablero.appendChild(celda);
        if ((i + 1) % 3 === 0) {
            const br = document.createElement('br');
            tablero.appendChild(br);
        }
    }
}

function verificarResultado() {
    let victoria = false;
    for (let i = 0; i < condicionesVictoria.length; i++) {
        const [a, b, c] = condicionesVictoria[i];
        if (tableroEstado[a] && tableroEstado[a] === tableroEstado[b] && tableroEstado[a] === tableroEstado[c]) {
            victoria = true;
            break;
        }
    }

    if (victoria) {
        alert(`Jugador ${jugadorActual} gana!`);
        juegoActivo = false;
    } else if (!tableroEstado.includes('')) {
        alert('¡Empate!');
        juegoActivo = false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarTablero();
    estado.innerText = `Turno del jugador: ${jugadorActual}`;
});
