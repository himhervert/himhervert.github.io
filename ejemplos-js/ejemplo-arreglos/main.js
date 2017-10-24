var materias = [
    { nombre: 'Tecnologias Web', creditos: 8, optativa: true },
    { nombre: 'Pensamiento Computacion', creditos: 10, optativa: false },
    { nombre: 'Compiladores A', creditos: 10, optativa: false },
    { nombre: 'Programación Visual', creditos: 8, optativa: false }
];
muestraMaterias();
agregaBuscador();

var EncabezadoTabla = document.getElementById('tablehead'); // Variable que contiene el t
EncabezadoTabla.addEventListener('click', function (evento) {
    var elemento = evento.target;
    var name = document.getElementById('nomb');
    var points = document.getElementById('cred');
    var optative = document.getElementById('opta');
    if (elemento == name) {
        materias.sort(comparaNombre);
        limpiaTabla();
    }
    else {
        if (elemento == points) {
            materias.sort(function (m1, m2) {
                return m1.creditos - m2.creditos;
            });
            limpiaTabla();
        } else {
            if (elemento == optative) {
                materias.sort(function (m1, m2) {
                    return m1.optativa - m2.optativa;
                });
                limpiaTabla();
            }
        }
    }
})
/// Se le insertan los elementos a la tabla, por primera vez.
function muestraMaterias() {
    var Tabla = document.createElement('table'); // Crea el elemento tabla en el documento
    Tabla.setAttribute('id', 'tabla');
    var thead = document.createElement('thead'); // Crea el elemento Thead de la tabla
    thead.setAttribute('id', 'tablehead');
    var tbody = document.createElement('tbody'); // Crea el elemento Tbody de la tabla
    tbody.setAttribute('id', 'tablebody');

    thead.appendChild(creaEncabezado());        /* Se le agrega al 'tablehead' el encabezado 'th'
                                                   Con los encabezados de cada dato.*/

    materias.forEach(function (mat) {           // Foreach del arreglo.
        tbody.appendChild(creaRenglon(mat));    // Se le agrega al TBody los elementos estaticos del arreglo.
    });

    Tabla.appendChild(thead);                   // Se inscrusta en la tabla el thead y tbody
    Tabla.appendChild(tbody);
    document.body.appendChild(Tabla);           // Se inserta la tabla en el BODY del documento
}

/* 
 * Funcion que se encarga de crea un encabezado con los elementos del objeto que se desea agregar.
*/
function creaEncabezado() {                     

    var encabezado = document.createElement('tr');  // Crea Renglon Que sera encabezado.
    encabezado.setAttribute('id', 'encabezado');    // Asigna id=encabezado al renglon.

    // Se crean los elementos (Nombre, Creditos, Optativa) que son las celdas que marcara cuales son
    // los datos del arreglo.
    var Nombre = document.createElement('th');
    var textoNombre = document.createTextNode('Nombre');
    Nombre.appendChild(textoNombre);
    Nombre.setAttribute('id', 'nomb');

    var Creditos = document.createElement('th');
    var textoCreditos = document.createTextNode('Creditos');
    Creditos.appendChild(textoCreditos);
    Creditos.setAttribute('id', 'cred');

    var Optativa = document.createElement('th');
    var textoOpativa = document.createTextNode('Optativa');
    Optativa.appendChild(textoOpativa);
    Optativa.setAttribute('id', 'opta');
    encabezado.appendChild(Nombre);
    encabezado.appendChild(Creditos);
    encabezado.appendChild(Optativa);
    return encabezado;
}
function creaRenglon(mat) {
    var renglon = document.createElement('tr');
    renglon.setAttribute('class', 'renglon');
    var nombre = document.createElement('td');
    var textoNombre = document.createTextNode(mat.nombre);
    nombre.appendChild(textoNombre);
    var creditos = document.createElement('td');
    var textocreditos = document.createTextNode(mat.creditos);
    creditos.appendChild(textocreditos);
    var optativa = document.createElement('td');
    var textooptativa = document.createTextNode(mat.optativa ? 'Si' : 'No');
    optativa.appendChild(textooptativa);

    renglon.appendChild(nombre);
    renglon.appendChild(creditos);
    renglon.appendChild(optativa);
    return renglon;
}

function comparaNombre(materia1, materia2) {
    if (materia1.nombre === materia2.nombre) return 0;
    else if (materia1.nombre < materia2.nombre) return -1;
    else return 1;
}

function limpiaTabla() {
    var tablebody = document.getElementById('tablebody');
    while (tablebody.firstChild) {
        tablebody.removeChild(tablebody.firstChild);
    }
    materias.forEach(function (mat) {
        tablebody.appendChild(creaRenglon(mat));    // Se le agrega al TBody los elementos.
    });
}

function agregaBuscador(){
    var formBuscar = document.createElement('form');
    formBuscar.setAttribute('id','formBusc');
    var labelBuscar = document.createElement('label');
    labelBuscar.textContent = 'Buscar Elemento';
    var inputBuscar = document.createElement('input');
    inputBuscar.setAttribute('type','text');
    inputBuscar.setAttribute('id','inputbuscar');
    var submitBuscar = document.createElement('input');
    submitBuscar.setAttribute('id','sendNudes');
    submitBuscar.setAttribute('type','submit');
    submitBuscar.setAttribute('value','Buscar');
    
    labelBuscar.appendChild(inputBuscar);
    formBuscar.appendChild(labelBuscar);
    formBuscar.appendChild(submitBuscar);
    document.body.appendChild(formBuscar);
}
