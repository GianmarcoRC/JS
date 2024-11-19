const rojo = document.getElementById('rojo');
const amarillo = document.getElementById('amarillo');
const verde = document.getElementById('verde');

let idtiempo;


let iniciar = () => {
    
    idtiempo = setTimeout(() => {
        enRojo();
    }, 2000);
    
    }


function enRojo() {
    rojo.innerText ="Espere";
    idtiempo = setTimeout(enAmarillo, 3000);
    
}
function enAmarillo() {
    amarillo.innerText ="Preparado";
    idtiempo = setTimeout(enVerde, 1000);
}

function enVerde() {
    verde.innerText ="Adelante";
    idtiempo = setTimeout(() =>{
        rojo.innerText ="";
        amarillo.innerText ="";
        verde.innerText ="";
        
    }, 4000);
}
