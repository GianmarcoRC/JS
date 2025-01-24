const container = document.getElementById('showtable');
const table = document.createElement('table');
const btnAll = document.getElementById('btnall');
const radios = document.getElementsByName('bso');

function mostrarConciertos() {
    table.innerHTML = '';
    mostrarCabeceraConciertos();
    listaConciertos.forEach(concierto => {
        const row = document.createElement('tr');

        row.innerHTML = `
        <td class="celda">${concierto.idsong}</td>
        <td class="celda">${concierto.BSO}</td>
        <td class="celda">${concierto.director}</td>
        <td class="celda">${concierto.nconciertos}</td>
      `;
        table.appendChild(row);
    });
    if (!container.contains(table)) {
        container.appendChild(table);
    }
}
function mostrarCabeceraConciertos() {
    const headerRow = document.createElement('tr');
    headerRow.classList.add('cabecera');
    headerRow.innerHTML = `
        <td class="celda">ID</td>
        <td class="celda">B.S.O</td>
        <td class="celda">Director</td>
        <td class="celda">NºConciertos</td>
      `;
    table.innerHTML = "";
    table.appendChild(headerRow);


    if (!container.contains(table)) {
        container.appendChild(table);
    }



}

function seleccionBSO() {
    const bso = Array.from(radios).find(radio => radio.checked)?.value; 
    if(!bso) {
        console.warn("No se ha seleccionado ninguna BSO.");
        return;
    }
    table.innerHTML = '';
    mostrarCabeceraConciertos();
    switch (bso) {
        case 'T':
            escribirConciertos("Titanic");
            break;
        case 'K':
            escribirConciertos("Lion");
            break;
        case 'L':
            escribirConciertos("Land");
            break;

        case 'G':
            escribirConciertos("Grease");
            break;
        default:
            console.warn("No se encontró una BSO válida.");

    }
}
function escribirConciertos(valor) {

    listaConciertos.forEach(concierto => {
        if (concierto.BSO.includes(valor)) {
            const row = document.createElement('tr');
            row.innerHTML = `
                                    <td class="celda">${concierto.idsong}</td>
                                    <td class="celda">${concierto.BSO}</td>
                                    <td class="celda">${concierto.director}</td>
                                    <td class="celda">${concierto.nconciertos}</td>
                                    `;
            table.appendChild(row);

        }
    });
    if (!container.contains(table)) {
        container.appendChild(table);
    }
}
window.onload = mostrarCabeceraConciertos;
btnAll.addEventListener('click', mostrarConciertos);
radios.forEach(radio => {
    radio.addEventListener('change', seleccionBSO);
});