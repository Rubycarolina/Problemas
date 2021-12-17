/**Los números de Pitágoras pueden ser descritos de la siguiente manera: a² + b² = c², donde a,  b 
 * y c son enteros, b y c son consecutivos, a y b son catetos y c es la hipotenusa. Escriba un  
 * programa para encontrar 5 ternas de números de Pitágoras. Por ejemplo: 
(a) 3² + 4² = 5², 5² +12² = 13²
 */

var a = parseInt (prompt ("Introduce los valores que quieres que tenga A (Catetos)."));

    var b = parseInt (prompt ("Introduce los valores que quieres que tenga B (Catetos)."));

    var c = parseInt (prompt ("Introduce los valores que quieres que tenga C (Hipotenusa)."));
        

    if (a ** 2 + b ** 2 === c ** 2)
    {
        document.write ("<h2>El<strong> " + a + ", " + b +" y "+ c + " </strong>son numeros de pitagoras.</h2>");
    } else {
        document.write ("<h2>No son numeros de pitagoras.</h2>");
    }