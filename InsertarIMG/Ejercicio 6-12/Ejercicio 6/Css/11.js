const cajas = document.querySelectorAll(".Cajas");

function desplazar() {
    cajas.forEach((caja, index) => {
        // Limpiamos cualquier clase de transformación previa
        caja.classList.remove("desplazar-derecha", "desplazar-abajo", "desplazar-arriba");

        // Aplicamos la clase para el desplazamiento horizontal
        caja.classList.add("desplazar-derecha");

        // Según el índice, decidimos si desplazamos hacia arriba o hacia abajo
        if (index % 2 === 0) {
            caja.classList.add("desplazar-abajo");
        } else {
            caja.classList.add("desplazar-arriba");
        }

        // Aseguramos que la caja se rotará también al hacer hover (sin perder la rotación)
        caja.style.transformOrigin = 'center'; // Establecemos el origen de la rotación en el centro
    });
}

function reiniciar() {
    cajas.forEach(caja => {
        // Limpiamos las transformaciones y restauramos el estado inicial
        caja.classList.remove("desplazar-derecha", "desplazar-abajo", "desplazar-arriba");
        caja.style.transform = ''; // Reiniciamos cualquier transformación aplicada
    });
}
