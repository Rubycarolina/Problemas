/**El banco le solicita un programa para cálculo en las libretas de ahorro. 
 * Si usted ingresa una  cantidad en una libreta de ahorros, su capital ira 
 * incrementando a medidas que gana  intereses mensuales. Haga un programa 
 * al cual se le digite el monto a ahorrar, la tasa de  interés, los meses de
 *  ahorro y que imprima por consola el monto al final del ahorro.
 */

 var monto = parseInt(prompt ("Introduce la cantidad que quieres ahorrar."));

 var interes = parseInt (prompt ("Introduce la tasa de interes."));
 
 var meses = parseInt (prompt ("Introduce los meses de ahorro."));
 
 var monto_total = monto; 
 
 if (interes <= 0 || monto <= 0) {
     alert ("Tu monto final es " + monto);
 } else if (interes >= 1 && monto >= 1){
     for (var i = 1 ; i <= meses ; ++i) {
         monto_total += monto_total * (interes / 100);
     }
     alert ("Tu monto final es " + monto_total);
 } else {
     alert ("El interes que has introducido no es un numero.");
 }