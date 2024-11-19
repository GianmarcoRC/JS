// Gianmarco Rodriguez Cipriani

// ==============================

function limpiar() {

document.getElementById('nescritor').innerText = '';
    document.getElementById('nombre').innerText = '';
    document.getElementById('skill1').innerText = '';
    document.getElementById('skill2').innerText = '';
    document.getElementById('skill3').innerText = '';
    document.getElementById('descripcion').innerText = '';
    document.getElementById('avisos').innerText = '';
}
limpiar();
function cargarDatos() {
    const escritores = [];
    const registros = listaHabilidades.split('\n');

    for (let i = 0; i < registros.length; i++) {
        const [nombre, habilidades, descripcion] = registros[i].split('|');

        const habilidadesArray = [];
        const habilidadesList = habilidades.split('...');

        for (let j = 0; j < habilidadesList.length; j++) {
            const habilidad = habilidadesList[j].split(' ')[0];
            habilidadesArray.push(habilidad);
        }

        escritores.push({
            nombre,
            habilidades: habilidadesArray,
            descripcion
        });
    }

    return escritores;
}


let indiceActual = 0;
let escritores = cargarDatos();

document.getElementById('reset').addEventListener('click', () => {
    //Todo vacio
    document.getElementById('nescritor').innerText = '';
    document.getElementById('nombre').innerText = '';
    document.getElementById('skill1').innerText = '';
    document.getElementById('skill2').innerText = '';
    document.getElementById('skill3').innerText = '';
    document.getElementById('descripcion').innerText = '';
    document.getElementById('avisos').innerText = '';
    indiceActual = 0;
});


function mostrarEscritor(indice) {
    if (indice < 0 || indice >= escritores.length)
        return;

    let escritor = escritores[indice];
    document.getElementById('nescritor').innerText = indice + 1;
    document.getElementById('nombre').innerText = escritor.nombre;
    document.getElementById('skill1').innerText = escritor.habilidades[0] || '';
    document.getElementById('skill2').innerText = escritor.habilidades[1] || '';
    document.getElementById('skill3').innerText = escritor.habilidades[2] || '';
    document.getElementById('descripcion').innerText = escritor.descripcion;

}


document.getElementById('first').addEventListener('click', () => {
    mostrarEscritor(0);
    indiceActual = 0;
});
document.getElementById('last').addEventListener('click', () => {
    mostrarEscritor(escritores.length - 1);
    indiceActual = escritores.length - 1;
});

document.getElementById('prev').addEventListener('click', () => {
    if (indiceActual > 0) {
        indiceActual--;
        mostrarEscritor(indiceActual);
    }
    else {
        document.getElementById('avisos').innerText = 'Estás al inicio de la lista';
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (indiceActual < escritores.length - 1) {
        indiceActual++;
        mostrarEscritor(indiceActual);
    } 
    else {
        document.getElementById('avisos').innerText = 'Estás al final de la lista';
    }
});
let intervalo;
let activo = false;

document.getElementById('auto').addEventListener('click', () => {
    if (activo) {
        clearInterval(intervalo);
        document.getElementById('auto').innerText = 'Automático';
    } else {
        intervalo = setInterval(() => {
            if (indiceActual >= escritores.length) {
                indiceActual = 0;
            }
            mostrarEscritor(indiceActual);
            indiceActual++;
        }, 500);
        document.getElementById('auto').innerText = 'Parar';
    }
    activo = !activo;
});

document.getElementById('gofind').addEventListener('click', () => {
    let palabraClave = document.getElementById('findskill').value;
    let escritorEncontrado = false;
    let autor;
    for (let escritor of escritores) {
        if (escritor.descripcion.includes(palabraClave)) {
            autor = escritor;
            escritorEncontrado = true;
            break;
        }
    }

    if (escritorEncontrado) {
     indiceActual = escritores.indexOf(autor);
        mostrarEscritor(indiceActual);
    }
    else {
        document.getElementById('avisos').innerText = 'No se encuentra esa palabra en los comentarios';
    }
});