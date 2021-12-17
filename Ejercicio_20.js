/**Se hace un triángulo con latas de leche condensadas, de la siguiente manera: 
 * 1 lata  en el tope, 3 en el siguiente, 5 en el siguiente etc. Realice una función para cada
 *  uno de  los puntos siguientes: 
(a) ¿Cuántos niveles se tiene con n latas? 
(b) ¿Cuántas latas sobran haciendo el triángulo si se tienen n latas (con 13 latas se 
    tienen 3  niveles y sobran 4)?
 */

    var latas = 1 * prompt ("Introduzca la cantidad de LATAS.");

    var sobrador = 0;
    var temporal = 1;
    var contador = 1;
    var niveles = 0;
    
    while (latas >= contador){
        temporal = temporal + 2;
        sobrador = latas - contador;
        contador = contador + temporal;
        niveles = niveles + 1;
    }
    
    document.write("<h1><strong>Niveles:</strong> " + niveles + "<br>");
    document.write("<strong>Sobran:</strong> " + sobrador);