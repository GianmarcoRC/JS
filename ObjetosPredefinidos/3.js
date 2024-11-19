const resultado = document.getElementById('resultado');
const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const anio = document.getElementById('anio');
const mostrar = document.getElementById('mostrar');

mostrar.addEventListener('click', (e) => {
    e.preventDefault(); // Añadido correctamente con paréntesis

    // Convertir los valores de los inputs a números
    const diaVal = parseInt(dia.value);
    const mesVal = parseInt(mes.value);
    const anioVal = parseInt(anio.value);

    // Crear el objeto Date
    const fecha = new Date(anioVal, mesVal - 1, diaVal);

    if (isNaN(fecha.getTime())) {
        resultado.textContent = "Fecha incorrecta";
        return;
    }

    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const diaSemana = diasSemana[fecha.getDay()];

    // Mostrar el resultado
    resultado.innerHTML = `El día ${diaVal} de ${meses[mesVal - 1]} de ${anioVal} es ${diaSemana}`;
});
