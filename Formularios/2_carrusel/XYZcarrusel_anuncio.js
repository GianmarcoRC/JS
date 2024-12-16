const fondos = ["crimson", "deepskyblue", "darkseagreen", "gold"];

const marcas = ["Ferrari", "Microsoft", "Starbucks", "Ferrero Rocher"];

const comenzar = document.getElementById("start");

const panelNumeros= document.getElementById("keynumber");
const carrusel = document.getElementById("carrusel");

comenzar.addEventListener("click", mostrarCheckBox);

function mostrarCheckBox() {
    panelNumeros.style.visibility="visible";
}

function mostrarClaveIncorecta(){
    carrusel.innerText = "CLAVE INCORRECTA";
}
function mostrarCarrusel(){
    carrusel.innerText = "";
    comenzar.innerText= "Parar carrusel";
    panelNumeros.style.visibility="hidden";
    setTimeout(() => {
       for (let i = 0; i< fondos.length; i ++){
        for (let j = 0; j< marcas.length; j++){
            carrusel.style.backgroundColor = fondos[i];
            carrusel.innerText = marcas[j];
        }
       }  
    }, 500);
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
    carrusel.innerText = "";
    comenzar.innerText= "Parar carrusel";
    panelNumeros.style.visibility="hidden";

    let eventoActual = document.getElementById(`dia${posicionactual + 1}`);
    eventoActual.innerHTML = literal[posicionactual]; //Escribo lo que que esta dentro del array en la posicion la que sea
    eventoActual.style.backgroundColor = starcolor; 
 
    let posicionanterior = (posicionactual === 0) ? literal.length - 1 : posicionactual - 1; //Regreso a la posicion anterior del array
    let eventoAnterior = document.getElementById(`dia${posicionanterior + 1}`); //Obtengo el evento anterior al que esta con el color oro en base a la posicion anterior que obtengo y canbio el color otra vez
    eventoAnterior.style.backgroundColor = defaultcolor; 

    posicionactual = (posicionactual + 1) % literal.length; //Y la posicion actual la regreso a cero 
}
