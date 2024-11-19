const marcador = document.getElementById('marcador');
const principal = document.getElementById('principal');

let contador = 10;

let intervalo;

function descontar() {
    contador--;
    marcador.innerText = contador;
    if (contador <= 0) {
        clearInterval(intervalo);
        explotar();
        marcador.innerText = "";
    }
}
function iniciar() {
    
    intervalo = setInterval(descontar, 1000);
    principal.innerText = "";
    
    }

function explotar() {
    principal.innerText = "BOOOOOOOOOOOOM !!!!!!!";
    contador = 10;
}
function parar() {
    clearInterval(intervalo);
    contador = 10;
    marcador.innerText = "";
}