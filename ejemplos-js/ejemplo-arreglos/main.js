var materias =
    [
        { nombre: 'Tecnologias Web', creditos: 8, optativa: true },
        { nombre: 'Pensamiento Computacion', creditos: 10, optativa: false },
        { nombre: 'Compiladores A', creditos: 10, optativa: false },
        { nombre: 'Programación Visual', creditos: 8, optativa: false },
        { nombre: 'Diseño de Circuitos', creditos: 10, optativa: false },
        { nombre: 'Compiladores B', creditos: 12, optativa: false },
        { nombre: 'Grafos', creditos: 10, optativa: false },
        { nombre: 'Redes A', creditos: 12, optativa: false },
        { nombre: 'Tecnologias de la informacion', creditos: 6, optativa: true },
        { nombre: 'Legislacion e informatica', creditos: 6, optativa: false },
        { nombre: 'Sistemas de la informacion', creditos: 10, optativa: false },
        { nombre: 'Economia y Finanzas', creditos: 6, optativa: false },
        { nombre: 'Estructura de Datos y Algoritmos', creditos: 8, optativa: false }
    ];
var elementosVisibles = [];
var filtroMateria = [];
var expRegAlfabeto = /[a-z]/i;
var contenedor = document.getElementById('contenido');
var formulario = document.getElementById('formulario');
var agregarElement = formulario.botonAgregar;
//agregaFormulario();
agregaBuscador();
muestraMaterias();
var estado = 0;

var EncabezadoTabla = document.getElementById('tablehead'); // Variable que contiene el t
EncabezadoTabla.addEventListener('click', function (evento) {
    var elemento = evento.target;
    var name = document.getElementById('nomb');
    var points = document.getElementById('cred');
    var optative = document.getElementById('opta');
    if (elemento == name) {
        if (estado == 0) {
            estado = 1;
            elementosVisibles.sort(comparaNombre);
        }
        else {
            if (estado == 1) {
                estado = 0;
                elementosVisibles.reverse();
            }
        }
    }
    else {
        if (elemento == points) {
            if (estado == 0) {
                estado = 1;
                elementosVisibles.sort(function (m1, m2) {
                    return m1.creditos - m2.creditos;
                });
            }
            else {
                estado = 0;
                elementosVisibles.reverse();
            }
        } else {
            if (elemento == optative) {
                if (estado == 0) {
                    estado = 1;
                    elementosVisibles.sort(function (m1, m2) {
                        return m1.optativa - m2.optativa;
                    });
                } else {
                    estado = 0;
                    elementosVisibles.reverse();
                }
            }
        }
    }
    limpiaTabla();
    generaTabla(elementosVisibles);
})

var inputBuscar = document.getElementById('inputbuscar');
inputBuscar.addEventListener('keyup', function () {
    if (inputBuscar.value != '') {
        if (expRegAlfabeto.test(inputBuscar.value)) {
            filtroMateria = buscarPorNombre(materias, inputBuscar.value);
            elementosVisibles = filtroMateria;
            limpiaTabla();
            generaTabla(elementosVisibles);

        }
        else {
            console.log('No funciono');
        }
    }
    else {
        elementosVisibles = materias;
        limpiaTabla();
        generaTabla(elementosVisibles);
    }

})

function buscarPorNombre(mats, nom) {
    return mats.filter(function (mat) {
        // return mat.nombre.toLowerCase().includes(nom.toLowerCase());
        return mat.nombre.includes(nom);

    });
}

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
    elementosVisibles = materias;
    elementosVisibles.forEach(function (mat) {           // Foreach del arreglo.
        tbody.appendChild(creaRenglon(mat));    // Se le agrega al TBody los elementos estaticos del arreglo.
    });

    Tabla.appendChild(thead);                   // Se inscrusta en la tabla el thead y tbody
    Tabla.appendChild(tbody);
    contenedor.appendChild(Tabla);           // Se inserta la tabla en el BODY del documento
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
}
function generaTabla(mats) {
    elementosVisibles.forEach(function (mat) {
        tablebody.appendChild(creaRenglon(mat));    // Se le agrega al TBody los elementos.
    });
}
function agregaBuscador() {
    var labelBuscar = document.createElement('label');
    labelBuscar.textContent = 'Buscar Elemento: ';
    var inputBuscar = document.createElement('input');
    inputBuscar.setAttribute('type', 'text');
    inputBuscar.setAttribute('id', 'inputbuscar');
    labelBuscar.appendChild(inputBuscar);
    contenedor.appendChild(labelBuscar);
}

function agregaElemento(mat, cred, opt) {
    var nuevo = { nombre: mat, creditos: cred, optativa: opt };
    if (materias.contains(nuevo)) {
        materias.push(nuevo);
    } else {
        window.alert('holi');
    }
    // materias.push({ nombre: mat, creditos: cred, optativa: opt });
}

Array.prototype.contains = function (nuevo) {
    for (i in this) {
        if (this[i].nombre === nuevo.nombre) {
            window.alert(this[i].nombre);
            if (this[i].creditos === nuevo.creditos) {
                return true;
            } else {
                return false;
            }
        }else{
            return false;
        }
    }
}

agregarElement.addEventListener('click', function (evento) {

    var nombre_materia = formulario.Materia.value;
    var numero_creditos = formulario.Creditos.value;
    var tipo_optativa = formulario.Optativa.checked;
    if (checaNombre(nombre_materia)) {
        if (checaCreditos(numero_creditos)) {
            agregaElemento(nombre_materia, numero_creditos, tipo_optativa);
        }
        else {

        }
    }
    else {

    }

})

function checaNombre(nombre_materia) {
    if (nombre_materia === '')
        return false;
    else
        return true;
}
function checaCreditos(numero_creditos) {
    if (numero_creditos === '')
        return false;
    else
        return true;
}
function Mensaje(mensaje) {

}