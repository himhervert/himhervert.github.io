document.write("Hola desde JavaScript");
console.log("Hola para la consola");

function imprime(arreglo) {
    for (var i = 0; i < arreglo.length; i++) {
        document.write('<br>');
        document.write("Hola mundo x", arreglo[i], " ");
    }
}
/* Notacion Literal de arreglos */
var arreglo = [3, 5, 7];
imprime(arreglo);

/* Notación constructor de arreglo */
var arreglo2 = new Array(9, 11, 13, 14);
imprime(arreglo2);

/* Notación Literal de Objetos */
var triangulo = {
    base: 3,
    altura: 5,
    area: function () {
        console.log("Area = " + this.base * this.altura / 2);
    }

};

triangulo.area();
