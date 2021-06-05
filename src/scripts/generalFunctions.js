function openMenu() {
const toggle_menu = document.querySelector('.toggle')
    toggle_menu.classList.toggle("active");

    const open_menu = document.querySelector('.navegation');
    open_menu.classList.toggle("active");

    const linksBanner = document.querySelector('.links-right');
    linksBanner.classList.toggle("active");

    const deleteLogo = document.querySelector('.logo');
    deleteLogo.classList.toggle("active");
}

function closeMenu() {
    const closeToggle = document.querySelector('.toggle');
    closeToggle.classList.remove("active");

     const closeMenu = document.querySelector('.navegation');
    closeMenu.classList.remove("active");


    const closeLinksRight = document.querySelector('.links-right');
    closeLinksRight.classList.remove("active");


    const close_logo = document.querySelector('.logo');
   close_logo.classList.remove("active");
}

function guardarDatos() {
    var nombreCliente = document.getElementById("nombreCliente").value;
     var fechaColocacion = document.getElementById("fechaColocacion").value;
      var metrosPlacas = document.getElementById("metrosPlacas").value;
       var direccionColocacion = document.getElementById("direccionColocacion").value;
        var celularCliente = document.getElementById("celularCliente").value;
         var placas = document.getElementById("listaPlacas").value;
         var i = 1;
         var fila = '<tr id="rowPlacas' + i + '">'+'<th>' +nombreCliente+ '</th>'+'<th>'+fechaColocacion+'</th>'+'<th>'+placas+'</th>'+'<th>'+metrosPlacas+'</th>'+'<th>'+direccionColocacion+'</th>'+'<th>'+celularCliente+'</th>'+'<th>'+'<button id="btnQuitar" onclick="quitarDatos(this);">Quitar</button>'+'</th></tr>';
         var btn = document.createElement("TR");
         btn.innerHTML=fila;
         document.getElementById("elementosAgregados").appendChild(btn);
         i++;
         document.getElementById("clientes").reset();
}

function quitarDatos(btn) {
   var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function calcMetros(btn) {
var plaquita = btn.value;
var precio = plaquita*1500;
var cantidadPlacas = plaquita*7;
document.getElementById("cantPlacas").innerHTML=" "+cantidadPlacas+" +5 de repuesto";
document.getElementById("precioPlacas").innerHTML=" $"+precio;
}

function calcMasMetros() {
    var mas = document.getElementById("masDe20").value;
    var precio2 = mas*1500;
    var cantidadPlacas2 = mas*7;
    if (mas >= 40){
document.getElementById("cantPlacas").innerHTML=" "+cantidadPlacas2+" +20 de repuesto";
document.getElementById("precioPlacas").innerHTML=" $"+precio2;
    }
else {
document.getElementById("cantPlacas").innerHTML=" "+cantidadPlacas2+" +15 de repuesto";
document.getElementById("precioPlacas").innerHTML=" $"+precio2;
}
}

function deleteClass() {
    const deleteC = document.querySelector('.contentImageP');
   deleteC.classList.remove("active");

   const deleteB = document.querySelector('.bcg');
   deleteB.classList.remove("active");

   alert('Evento click sobre un input text con id="nombre2"');
}

function disableScroll() {
    document.body.style.overflow="hidden";  
}

function enableScroll() {
    document.body.style.overflow="initial";
}
