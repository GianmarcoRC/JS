const listaUsuarios = `tziemens0,Franecki LLC,Ongabelen
gsmorthit1,Will-Lubowitz,Chancay
ckamiyama2,Hammes LLC,Guarumal
gmorales3,"O'Kon; Hessel and Kshlerin",
mheathcott4,Okuneva-Haley,Casillas
dknyvett5,Russel-Hayes,Maanĭt
crosnau6,Wintheiser-Ferry,
gsaur7,"Von; Raynor and Gorczany",
rbasindale8,Weissnat-Connelly,Mkiriwadjumoi
kgarvagh9,Kautzer-Kuhic,Kajuru
mbellissa,"Cronin; Konopelski and Keeling",Calape
cdashb,Keebler-Kozey,Nanyuki
vskentelberyc,Okuneva Group,Umm Ruwaba
,Howell Inc,Laoxialu
,Bernier Inc,Banjar Ambengan
,Strosin Group,San Antonio
kfeechumg,"Wolff; Hammes and Towne",Gostagayevskaya
czannollih,Hirthe and Sons,Wenci
cwardsi,"Pacocha; Hand and Bergnaum",Nador
apembridgej,"Murazik; Fritsch and Fay",Taozixi
btreatk,Torphy-Kunde,Brahin
mswendelll,Bergnaum Group,Kimry
colanderm,"Gerlach; Reichel and Mayert",Saint-Chamond
rcominon,Muller-McCullough,Ulset
dcastelloneo,Jast Inc,Mampong
kaimsonp,"Funk; Brekke and Oberbrunner",Rauna
rshilvockq,,Dongtai
scoonr,Shields-Ritchie,Binkolo
cbeachs,Streich-Rutherford,Skoútari
vpitkint,Hammes-Lueilwitz,Espinosa
gmccullumu,"Osinski; Bailey and Brekke",
edelacroixv,Kling-Walter,Darkovice
tfriddw,"Kunde; Witting and Funk",Maumere
momandx,Tremblay Inc,Satipo
pmcallany,Jerde LLC,Hamburg
hshicklez,,Bilhó
tlewins10,Hartmann-Bechtelar,
fchorlton11,Hintz-Adams,Placer
,Schaefer-Barrows,
britchman13,"Mills; Gutkowski and Hegmann",Shawan
sparton14,Zemlak LLC,Angadanan`

const listaRegistros = [];
const lineas = listaUsuarios.split('\n');
for (const linea of lineas) {
    const [usuario, empresa, ciudad] = linea.split(',');
    if (usuario && empresa && ciudad) {
        listaRegistros.push({ usuario, empresa, ciudad });
    }
}
const lienzo = document.getElementById('lienzo');
const btnUsuario = document.getElementById('btnusuario');
const btnEmpresa = document.getElementById('btnempresa');
const btnCiudad = document.getElementById('btnciudad');
let mostrarUsuario = false;
let mostrarEmpresa = false;
let mostrarCiudad = false;

function actualizarTabla() {
    let html = '<table><tr>';
    if (mostrarUsuario) html += '<th>Usuario</th>';
    if (mostrarEmpresa) html += '<th>Empresa</th>';
    if (mostrarCiudad) html += '<th>Ciudad</th>';
    html += '</tr>';
    listaRegistros.forEach(registro => {
        html += '<tr>';
        if (mostrarUsuario) html += `<td>${registro.usuario}</td>`;
        if (mostrarEmpresa) html += `<td>${registro.empresa}</td>`;
        if (mostrarCiudad) html += `<td>${registro.ciudad}</td>`;
    });
    html += '</tr></table>';
    lienzo.innerHTML = html;
}
btnUsuario.addEventListener('click', () => {
    mostrarUsuario = !mostrarUsuario;
    actualizarTabla();
});
btnEmpresa.addEventListener('click', () => {
    mostrarEmpresa = !mostrarEmpresa;
    actualizarTabla();
});
btnCiudad.addEventListener('click', () => {
    mostrarCiudad = !mostrarCiudad;
    actualizarTabla();
});