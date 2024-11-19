const mitexto = "Una mañana, tras un sueño intranquilo, Gregorio Samsa se despertó convertido en un monstruoso insecto. Estaba echado de espaldas sobre un duro caparazón y, al alzar la cabeza, vio su vientre convexo y oscuro, surcado por curvadas callosidades, sobre el que casi no se aguantaba la colcha, que estaba a punto de escurrirse hasta el suelo. Numerosas patas, penosamente delgadas en comparación con el grosor normal de sus piernas, se agitaban sin concierto. - ¿Qué me ha ocurrido? No estaba soñando. Su habitación, una habitación normal, aunque muy pequeña, tenía el aspecto habitual. Sobre la mesa había desparramado un muestrario";
document.write(mitexto);
let i = 0;

function cambiaColor() {

    const bloque1 = document.getElementById("bloque1");
    bloque1.innerText = mitexto;
    bloque1.style.backgroundColor = "blue";

}
function escribeTexto() {
    document.write(mitexto);

    console.log(mitexto);
}
function cambiaContador() {
    const bloque2 = document.getElementById("bloque2");
    bloque2.innerText = i;
    i+=1;
    console.log(i);
}