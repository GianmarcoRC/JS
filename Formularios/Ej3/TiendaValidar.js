const formulario = document.getElementsByName('Compra')[0];


formulario.addEventListener('submit', (event) => {
    event.preventDefault(); 
   

    const codigoPostal = formulario.codigo_postal.value;

    console.log(`El código postal ingresado es: ${codigoPostal}`);
    alert(`El código postal ingresado es: ${codigoPostal}`);
});