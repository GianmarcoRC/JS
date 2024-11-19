const pedir = prompt("Introduce un numero del 0 al 10");
   
    if(pedir >= 0 && pedir < 3){
         alert("Muy deficiente");
    } else if (pedir >= 3 && pedir <5){
        alert("Insuficiente");
    }
    else if (pedir >= 5 && pedir < 6){
        alert("Bien");
    }
    else if (pedir >= 6 && pedir < 9){
        alert("Notable");
    }
    else if (pedir >= 9 && pedir <=10){
        alert("Sobresaliente");
    }
    else{
        alert("Valor introducido incorrecto");
    }
    
