
function compruebaColumna() {
  for (let i = 0; i < 9; i++) {
    let valoresColumnas = [];
    for (let j = 0; j < 9; j++) {
      valoresColumnas.push(document.getElementById(`cell-${j * 9 + i}`).value);
    }
    if (!compruebaDuplicados(valoresColumnas)) {
      alert(`Columna ${i + 1} incorrecta`);
      return;
    }
  }
  return true;
}

function compruebaFilas() {
  for (let i = 0; i < 9; i++) {
    let valoresFila = [];
    for (let j = 0; j < 9; j++) {
      valoresFila.push(document.getElementById(`cell-${i * 9 + j}`).value);
    }
    if (!compruebaDuplicados(valoresFila)) {
      alert(`Fila ${i + 1} incorrecta`);
      return;
    }
  }
  return true;
}

function compruebaDuplicados(arr) {
  return arr.every((value, index) => {
    return arr.indexOf(value) === index;
  });
}
function validadSudoku(){
  
  if (compruebaFilas()== true && compruebaColumna()== true) {
  alert("EL Sudoku es correcto");
}else{
  alert("El Sudoku no es correcto");
  }
}