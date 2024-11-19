

/*nombre = prompt("Ingrese el nombre" , "nombre");
const bloque1 = document.getElementById("bloque1");
const bloque2 = document.getElementById("bloque1");
console.log("hola mundo");
console.log(nombre);
document.write(`Hola, ${nombre}!`);
bloque1.innerText = "Este es un bloque 1 " + nombre;
let result = 3/"hola";
console.log("division de caracteres " + result);
result = 1000/0;
console.log("divicion por cero " +result);

result =3**5;
console.log("potencia " + result);*/
// let texto1 = "Hola";
// let texto2 = "Hola";
// let textofinal = texto1 + ": " + texto2;
// bloque1.innerText = textofinal;
// let textofinal2 = `${texto1}...... ${texto2}`;
// let textofinal3 = `<h2>${texto1}</h2>...... ${texto2}`;
// bloque2.innerText = textofinal2;
const bloque3  = document.getElementById("bloque3");
const miobjeto = {
    nombre: "Pepito\n",
    apellido: "Perez\n",
    edad: 25,
}
let valores = "";
let claves = "";
for (let v in miobjeto){
    valores += miobjeto[v]
    claves += v};



bloque3.innerText = valores;
bloque3.innerText += "..." + claves;