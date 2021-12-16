/**Escriba un programa al cual se le digiten diez valores y al final imprima por pantalla 
 * la suma  de los valores, las sumas de los cuadrados, el promedio, el máximo y el mínimo.
 * 
 */

 var valores = [];

 for (let i = 1; i <= 10; i++) {
    valores.push( 1 * prompt("Introduce el valor #" + i + ".") );
 }
 
 var suma = 0;
 var cuadrados = 0;
 var promedio = 0;
 
 for (var n of valores) {
    // SUMA:
    suma += n;
 
    // SUMA DE CUADRADOS:
    cuadrados += n ** 2;
 
    // PROMEDIO:
    var t = valores.length;
    promedio = suma / t;
 }
    // MAXIMO:
    let max = Math.max(...valores);
 
    // MINIMO:
    let min = Math.min(...valores);
 
     // POR PANTALLA:
     document.write ("<strong>Suma: </strong>" + suma + ".<br>" +
                     "<strong>Suma de cuadrados: </strong>" + cuadrados + ".<br>" +
                     "<strong>Promedio: </strong>" + promedio + ".<br>" +
                     "<strong>Maximo: </strong>" + max + ".<br>" +
                     "<strong>Minimo: </strong>" + min + ".<br>"
     );