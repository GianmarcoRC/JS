// Este ejercicio quiere simular un cartel para un evento deportivo. Para ello hay que pulsar sobre el color correcto que lo activa.
// Una vez activado, el evento va rotando en cuatro espacios del espacio “carrusel” (diaN), cambiando el texto y el color de fondo de
// posición cada medio segundo.
// (Hay que completar la variable literal con otros tres textos, un total de cuatro)
// Hay que cumplir lo siguiente para que funcione el anuncio del evento:
// 1. Pulsar en “Comenzar”. Aparece el panel con los colores. (el estilo que hace aparecer el panel es visibility con valor visible)
// 2. El color para hacerlo funcionar es el dorado. Si no es el correcto, aparece el texto “OPCIÓN NO VÁLIDA” en el espacio
// “avisos”.
// 3. Cuando se pulsa sobre el color dorado ocurre que:
// • El botón de inicio cambia de texto a “Parar anuncios”.
// • Los mensajes de anuncios desaparecen. Cada anuncio aparece en su día, hay cuatro anuncios y cuatro div, uno por día.
// • Desaparecen también la selección de colores.
// • En el espacio “carrusel”, cada medio segundo, cambia de posición el anuncio con su color de fondo. Los colores a usar
// vienen dados en el archivo .js en literal, starcolor y defaultcolor.
// 4. Al pulsar “Parar anuncios”, se detiene el anuncio y se vuelve al estado inicial.

// Comenzar es el botón que activa el anuncio

let comenzarButton = document.getElementById("comenzar");
let panel = document.getElementById("panel");
let avisos = document.getElementById("avisos");
let carrusel = document.getElementById("carrusel");

let day1 = document.getElementById("day1");

let textos = ["Texto 1", "Texto 2", "Texto 3", "Texto 4"];

let dayIndex = 0;

comenzarButton.addEventListener("click", function () {
    if (panel.style.visibility === "visible") {
        panel.style.visibility = "hidden";
        comenzarButton.textContent = "Comenzar";
        avisos.textContent = "";
        carrusel.innerHTML = "";
        dayIndex = 0;
    } else {
        panel.style.visibility = "visible";
        comenzarButton.textContent = "Parar anuncios";
        avisos.textContent = "";
        for (let i = 0; i < textos.length; i++) {
            let anuncio = document.createElement("div");
            anuncio.textContent = textos[i];
            anuncio.style.backgroundColor = starcolor[i];
            carrusel.appendChild(anuncio);
        }
        setInterval(function () {
            carrusel.style.transform = `translateX(-${dayIndex * 100}vw)`;
            dayIndex = (dayIndex + 1) % textos.length;
        }, 500);
        document.getElementById("dorado").addEventListener("click", function () {
            if (this.style.backgroundColor === starcolor[0]) {
                comenzarButton.textContent = "Parar anuncios";
                avisos.textContent = "";
                for (let i = 0; i < textos.length; i++) {
                    let anuncio = document.createElement("div");
                    anuncio.textContent = textos[i];
                    anuncio.style.backgroundColor = defaultcolor[i];
                    carrusel.appendChild(anuncio);
                }
                clearInterval(interval);
            } else {
                avisos.textContent = "OPCIÓN NO VÁLIDA";
            }
        });
        let interval = setInterval(function () {
            carrusel.style.transform = `translateX(-${dayIndex * 100}vw)`;
            dayIndex = (dayIndex + 1) % textos.length;
        }, 500);
        comenzarButton.addEventListener("click", function () {
            if (comenzarButton.textContent === "Parar anuncios") {
                comenzarButton.textContent = "Comenzar";
                clearInterval(interval);
            } else {
                comenzarButton.textContent = "Parar anuncios";
                interval = setInterval(function () {
                    carrusel.style.transform = `translateX(-${dayIndex * 100}vw)`;
                    dayIndex = (dayIndex + 1) % textos.length;
                }, 500);
            }
        });
        day1.textContent = textos[dayIndex];
        day1.style.backgroundColor = defaultcolor[dayIndex];
        document.getElementById("dorado").style.backgroundColor = starcolor[dayIndex];
        document.getElementById("dorado").style.color = "white";
        document.getElementById("comenzar").style.backgroundColor = "white";
        document.getElementById("comenzar").style.color = "black";
        document.getElementById("comenzar").style.border = "none";
        document.getElementById("dorado").style.border = "none";
        document.getElementById("comenzar").style.cursor = "pointer";
        document.getElementById("dorado").style.cursor = "pointer";
        document.getElementById("comenzar").style.transition = "background-color 0.5s, color 0.5s, border 0.5s";
        document.getElementById("dorado").style.transition = "background-color 0.5s, color 0.5s, border 0.5s";
        document.getElementById("comenzar").addEventListener("mouseover", function () {
            this.style.backgroundColor = "black";
            this.style.color = "white";
            this.style.border = "2px solid white";
        });
        document.getElementById("comenzar").addEventListener("mouseout", function () {
            this.style.backgroundColor = "white";
            this.style.color = "black";
            this.style.border = "none";
        });
        document.getElementById("dorado").addEventListener("mouseover", function () {
            this.style.backgroundColor = "black";
            this.style.color = "white";
            this.style.border = "2px solid white";
        });
       

    }
});


