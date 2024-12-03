document.getElementById('entrar').addEventListener('click', function () {
    const clave = document.getElementById('clave').value;
    const cb2 = document.getElementById('cb2').checked;
    const cb3 = document.getElementById('cb3').checked;
    const cb5 = document.getElementById('cb5').checked;
    document.getElementById('mensaje').innerText = '';
    if (clave.length === 8 && clave[0] === 'J' && clave.includes('ap') && cb2 && cb3 && cb5) {
        document.getElementById('acceso').style.display = 'none';
        crearTablero();
    } else if(clave[0]!=='J'){
        document.getElementById('mensaje').innerText = 'Clave incorrecta. DEBE EMPEZAR por J';
    }else if (!clave.includes('ap')){
        document.getElementById('mensaje').innerText = 'Clave incorrecta no contiene ap';
    }else if (!cb2 && !cb3 && !cb5) {
        document.getElementById('mensaje').innerText = 'Checkbox incorrectos no son 2 , 3 , 5';
    }else if (clave.length !== 8) {
        document.getElementById('mensaje').innerText = 'Clave incorrecta no tiene 8 caracteres';
    }
});

function crearTablero() {
    const zonaDibujo = document.getElementById('zonadibujo');
    zonaDibujo.style.display = 'block';
    zonaDibujo.style.width = '300px';
    zonaDibujo.style.height = '300px';
    zonaDibujo.style.border = '1px solid black';
    zonaDibujo.style.position = 'relative';

    let tableroHTML = '';
    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
            tableroHTML += `
                <div class="celda" 
                     style="
                         width: 10px; 
                         height: 10px; 
                         position: absolute; 
                         left: ${j * 10}px; 
                         top: ${i * 10}px; 
                         border: 1px solid lightgray; 
                         background-color: white;"></div>`;
        }
    }
    zonaDibujo.innerHTML = tableroHTML;

    document.querySelectorAll('.celda').forEach(celda => {
        celda.addEventListener('mouseover', pintarCelda);
    });

    
    inicializarPaleta();
}

let colorActivo = 'white';
let pincelActivado = false;

function inicializarPaleta() {
    const colores = ['red', 'green', 'blue', 'yellow', 'white'];
    const paleta = document.createElement('div');
    paleta.style.display = 'flex';
    paleta.style.marginBottom = '10px';

    colores.forEach(color => {
        const botonColor = document.createElement('div');
        botonColor.style.width = '30px';
        botonColor.style.height = '30px';
        botonColor.style.backgroundColor = color;
        botonColor.style.cursor = 'pointer';
        botonColor.addEventListener('click', () => seleccionarColor(color));
        paleta.appendChild(botonColor);
    });

    document.body.insertBefore(paleta, document.getElementById('zonadibujo'));
    actualizarEstadoPincel();
}

function seleccionarColor(color) {
    colorActivo = color;
    pincelActivado = true;
    actualizarEstadoPincel();
}

function pintarCelda(event) {
    if (pincelActivado) {
        event.target.style.backgroundColor = colorActivo;
    }
}

function actualizarEstadoPincel() {
    const mensaje = document.getElementById('mensaje');
    mensaje.innerText = pincelActivado ? 'PINCEL ACTIVADO' : 'PINCEL DESACTIVADO';
}

document.getElementById('zonadibujo').addEventListener('click', function (event) {
   
        pincelActivado = !pincelActivado;
        actualizarEstadoPincel();
    
});
