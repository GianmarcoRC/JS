const textArea = document.getElementById('text');
    const buscarletra = document.getElementById('buscar');
    const formato = document.getElementById('formato');
    const cambiarprimera = document.getElementById('cambiar-primera');
    const resultado = document.getElementById('resultado');
    // 1. Buscar la primera ocurrencia y sustituir con formato.
    cambiarprimera.addEventListener('click', (event) => {
        event.preventDefault(); // Evitar que el formulario se envíe
        const buscartexto = buscarletra.value;
        const formatotexto = formato.value;
        let text = textArea.value;
        const index = text.indexOf(buscartexto);

        if (index !== -1) {
            let formattedText;
            switch (formatotexto) {
                case 'B':
                    formattedText = `\<strong\>${buscartexto}\</strong\>`;
                    break;
                case 'b':
                    formattedText = `<span class="parpadeante">${buscartexto}</span>`;
                    break;
                case 'G':
                    formattedText = `<span class="grande">${buscartexto}</span>`;
                    break;
                case 'M':
                    formattedText = `<span class="mayuscula">${buscartexto}</span>`;
                    break;
                case 'n':
                    formattedText = `<span class="minusculas">${buscartexto}</span>`;
                    break;
                case 's':
                    formattedText = `<span class="minuscula">${buscartexto}</span>`;
                    break;
                default:
                    alert('Formato no válido. Utiliza: B, b, G, M, n, s.');
                    return;
            }

            // Sustituir la palabra por su versión formateada.
            textArea.innerHTML = text.substring(0, index) + formattedText + text.substring(index + buscartexto.length);
            resultado.innerHTML = text.substring(0, index) + formattedText + text.substring(index + buscartexto.length);
        } else {
            alert('La palabra no se encuentra en el texto.');
        }
    });