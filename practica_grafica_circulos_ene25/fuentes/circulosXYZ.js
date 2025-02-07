// Ciudades a añadir como opciones al input select
const cities = ["Granada", "Valencia", "Madrid", "Toledo"];

/*

Estos métodos describen cómo asignar datos a un objeto DOM creado dinámicamente
y cómo usarlos al lanzar el evento enlazado al objeto

function usarDatosObjetoDOM() {
 this es el objeto que invoca el evento, obj en la función crearObjetoDOM
  let informacion = this.info;
  console.log("usarDatosObjetoDOM:" + informacion);
}

function crearObjetoDOM() {
  const obj = document.createElement(tag);
  let informacion = {a:10, b:"data"}
  obj.info = informacion;
  obj.addEventListener("click", usarDatosObjetoDOM);
}

Estilos a añadir a cada círculo con el campo a asignar del objeto

left : obj.ejex  en px ; ej: 20px
top : obj.ejey en px
width : obj.box en px
height : obj.box en px
boxShadow : 0 0 0 obj.margin en px obj.colormargin; ej: 0 0 0 30px #f799f0
backgroundColor : obj.colorbox;

Además hay que añadir la clase circle
*/
const circulo = JSON.parse(circle_data);

const grafica = document.getElementById('grafica');
const cityFilter = document.getElementById('scities');
const cityname = document.getElementById('cityname');
const citystats = document.getElementById('citystats');

function usarDatosObjetoDOM() {
  let informacion = this.info;
  console.log("usarDatosObjetoDOM:", informacion);

  cityname.textContent = informacion.label;

  clearInfo();
  const codDiv = document.createElement('div');
  codDiv.classList.add('info');
  codDiv.textContent = `Código: ${informacion.cod}`;

  const boxDiv = document.createElement('div');
  boxDiv.classList.add('info');
  boxDiv.textContent = `Valor: ${informacion.box}`;

  const marginDiv = document.createElement('div');
  marginDiv.classList.add('info');
  marginDiv.textContent = `Incremento: ${informacion.margin}`;


  citystats.appendChild(codDiv);
  citystats.appendChild(boxDiv);
  citystats.appendChild(marginDiv);

}

function clearInfo() {
  cityname.textContent = '';
  citystats.textContent = '';
}

function crearObjetoDOM(circulo) {
  const obj = document.createElement('div');
  obj.classList.add('circle');
  let informacion = {
    cod: circulo.cod,
    ejex: circulo.ejex,
    ejey: circulo.ejey,
    box: circulo.box,
    label: circulo.label,
    margin: circulo.margin,
    colorbox: circulo.colorbox,
    colormargin: circulo.colormargin 
  }
  obj.info = informacion;
  obj.style.left = `${circulo.ejex}px`;
  obj.style.top = `${circulo.ejey}px`;
  obj.style.width = `${circulo.box}px`;
  obj.style.height = `${circulo.box}px`;
  obj.style.backgroundColor = circulo.colorbox;
  obj.style.boxShadow = `0 0 0 ${circulo.margin}px ${circulo.colormargin}`;
  obj.classList.add('circle');

 
obj.addEventListener('mouseover', cargarNombre);
  obj.addEventListener("click", usarDatosObjetoDOM);
  
  grafica.appendChild(obj);
}
 function cargarNombre(){
  let informacion = this.info;
  cityname.textContent = informacion.label;
 }
function cargarCirculos(filtro = 'all') { 
  grafica.innerHTML = '';
  const dataFilter = filtro === 'all' ? circulo : circulo.filter(circle => circle.label ===filtro);

  dataFilter.forEach(circle => crearObjetoDOM(circle));
}
function ciudadPopular() {
    
  circulo.forEach(circle => {
    if (!cities.includes(circle.label)) {
      cities.push(circle.label);
    }
  });
  cities.sort();
  cityFilter.innerHTML = '<option value="all">Todas las provincias</option>';
  cities.forEach(city => {
    const option = document.createElement('option');
    option.value = city;
    option.textContent = city;
    cityFilter.appendChild(option);
  });
}
cityFilter.addEventListener('change', (event) => {
  const selectedCity = event.target.value;
  clearInfo();
  cargarCirculos(selectedCity);
});

window.onload(cargarCirculos(),ciudadPopular());