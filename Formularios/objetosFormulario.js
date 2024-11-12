function mostrarCheck() {
    document.getElementById("listValues").style.display = "none";
    document.getElementById("selectValues").style.display = "none";
    document.getElementById("checkValues").style.display = "block";
    ocultarSeleccion();
}

function mostrarSelect() {
    document.getElementById("checkValues").style.display = "none";
    document.getElementById("listValues").style.display = "none";
    document.getElementById("selectValues").style.display = "block";
    ocultarSeleccion();
}

function mostrarList() {
    document.getElementById("selectValues").style.display = "none";
    document.getElementById("checkValues").style.display = "none";
    document.getElementById("listValues").style.display = "block";
    ocultarSeleccion();
}

function mostrarSeleccion(valor) {
    const selectedValueDiv = document.getElementById("selectedValue");
    selectedValueDiv.textContent = `Valor seleccionado: ${valor}`;
    selectedValueDiv.style.display = "inline-block";
}
function mostrarSeleccionCheck(valor) {
    const selectedValueDiv = document.getElementById("selectedValue");
    selectedValueDiv.textContent = `Valor seleccionado: ${valor}\n ${valor}`;
    selectedValueDiv.style.display = "inline-block";
}
function ocultarSeleccion() {
    const selectedValueDiv = document.getElementById("selectedValue");
    selectedValueDiv.style.display = "none";
}