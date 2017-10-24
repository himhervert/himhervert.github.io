var btnAgregar = document.getElementById('botonAgregar');
// event handler 
// btnAgregar.onclick = agregaCaja;
// btnAgregar.onclick = function(){
// window.alert('Ejecutando funcion anonima');
// }
// event listener
var padre = document.getElementById('Padre');
padre.addEventListener('click', function (evento) {
    var hijo = evento.target;
    if(hijo != padre){ // Valida que el click no sea el mismo al contenedor
        this.removeChild(hijo);
    }
})



btnAgregar.addEventListener('click', function () {
    var textoentrada = document.getElementById('entrada');
    var contenido = textoentrada.value;
    if (contenido != '') {
        agregaCaja(contenido);
    }

});
// document.addEventListener('click',function(){
// window.alert('funcion anonima');
// });
function agregaCaja(texto) {
    var cajas = document.getElementsByTagName('div');
    var nuevo = document.createElement('div');
    var texto = document.createTextNode(texto);
    nuevo.appendChild(texto);
    nuevo.setAttribute("class", "caja");
    var seccion = document.getElementById('Padre');
    seccion.appendChild(nuevo);
}