"use strict";

const texto = document.getElementById("intxt");

const area = document.getElementById("lienzo");

function escribir(t) {
  area.textContent = t;
}

function activar() {
  let dato = texto.value;
  escribir(dato);
}
