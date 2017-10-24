var btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', function () {
    var propina = document.getElementById('propina');
    var propinaPersona = calcula();
    propina.innerHTML = 'Propina $' + propinaPersona + ' por persona';
});

var calculadora = document.getElementById('calculadora');

function calcula() {
    try {
        var calculadora = document.getElementById('calculadora');
        var total = parseFloat(calculadora.total.value);
        var numPersonas = parseInt(calculadora.personas.value);
        var servicio = parseInt(calculadora.servicio.value);
        if (Number.isNaN(numPersonas)) {
            
        }
    } catch (error) {

    }
    return total / numPersonas * servicio / 100;
} 