const horasTrabajadas = parseInt(prompt("Introduce las horas trabajadas"));
const precioporhora = parseFloat(prompt("Introduce el precio por hora"));

function calculateSalary(horasTrabajadas, precioporhora) {
  if (horasTrabajadas <= 35) {
    return horasTrabajadas * precioporhora;
  } else {
    const horasextra = horasTrabajadas - 35;
    const sueldo1 = 35 * precioporhora + horasextra * (precioporhora * 1.5);
    return applyTaxes(sueldo1);
  }
}

function applyTaxes(sueldo) {
  if (sueldo <= 500) {
    return sueldo;
  } else if (sueldo <= 900) {
    const taxableAmount = sueldo - 500;
    const impuestos = taxableAmount * (25 / 100);
    return sueldo - impuestos;
  } else {
    const taxableAmount = sueldo - 900;
    const impuestos = taxableAmount * (45 / 100);
    return sueldo - impuestos;
  }
}

const sueldoFinal = calculateSalary(horasTrabajadas, precioporhora);
console.log(`Tu sueldo despues de impuestos es: ${sueldoFinal}`);
