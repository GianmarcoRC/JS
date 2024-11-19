const literal = [
    "Final del Campeonato <br> 14 noviembre",
    "Evento Deportivo 2 <br> 20 noviembre",
    "Evento Deportivo 3 <br> 25 noviembre",
    "Evento Deportivo 4 <br> 30 noviembre"
];

let intervalId;
let posicionactual = 0;

const starcolor = "gold";
const defaultcolor = "rgb(212, 212, 208)";
const comenzar = document.getElementById("start");
const panel = document.getElementById("keycolor");
const carrusel = document.getElementById("carrusel");
const avisos = document.getElementById("avisos"); 

function mostrarPanelColores() {
    panel.style.visibility = "visible";
}

comenzar.addEventListener('click', function() {
    if (this.innerText === "Comenzar") {
        mostrarPanelColores();
        this.innerText = "Parar anuncios";
    } else {
        detenerAnuncios();
        this.innerText = "Comenzar";
    }
});

function manejarClickCuadrado(idCuadrado) {
    if (idCuadrado === "dorado") {
        iniciarAnuncios();
    } else {
        avisos.innerText = "OPCIÓN NO VÁLIDA"; 
    }
}

function iniciarAnuncios() {
    panel.style.visibility = "hidden"; 
    avisos.textContent = "";
    carrusel.style.visibility = "visible"; 

    for (let i = 0; i < literal.length; i++) {
        let eventoActual = document.getElementById(`dia${i + 1}`);
        eventoActual.style.backgroundColor = defaultcolor; 
        eventoActual.innerText = "";
    }
    intervalId = setInterval(mostrarAnuncio, 500); 
}

function mostrarAnuncio() {
    let eventoActual = document.getElementById(`dia${posicionactual + 1}`);
    eventoActual.innerHTML = literal[posicionactual]; //Escribo lo que que esta dentro del array en la posicion la que sea
    eventoActual.style.backgroundColor = starcolor; 
 
    let posicionanterior = (posicionactual === 0) ? literal.length - 1 : posicionactual - 1; //Regreso a la posicion anterior del array
    let eventoAnterior = document.getElementById(`dia${posicionanterior + 1}`); //Obtengo el evento anterior al que esta con el color oro en base a la posicion anterior que obtengo y canbio el color otra vez
    eventoAnterior.style.backgroundColor = defaultcolor; 

    posicionactual = (posicionactual + 1) % literal.length; //Y la posicion actual la regreso a cero 
}

function detenerAnuncios() {
    clearInterval(intervalId);
    carrusel.style.visibility = "hidden"; 

    for (let i = 0; i < literal.length; i++) {
        let eventoActual = document.getElementById(`dia${i + 1}`);
        eventoActual.style.backgroundColor = defaultcolor; 
        eventoActual.textContent = ""; 
    }
}

const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const azul = document.getElementById("azul");
const dorado = document.getElementById("dorado");

rojo.addEventListener("click", function() {
    manejarClickCuadrado("rojo");
});
verde.addEventListener("click", function() {
    manejarClickCuadrado("verde");
});
azul.addEventListener("click", function() {
    manejarClickCuadrado("azul");
});
dorado.addEventListener("click", function() {
    manejarClickCuadrado("dorado");
});