var a = 1 * prompt ("Introduce el valor de (a).");
/** Haga una función eqcuad(a, b, c) la cual retorne la solución positiva de
 *  una ecuación cuadrática cuyos parámetros son a, b y c respectivamente.
 */

var b = 1 * prompt ("Introduce el valor de (b).");
var c = 1 * prompt ("Introduce el valor de (c).");

var raiz = (b ** 2) - 4 * (a * c);

if (raiz < 0){
    alert("El resultado de la raiz da un numero negativo, ingresa otros valores.");
} else if (raiz > 0){
    alert(eqcuad (a , b, raiz));
} else {
    alert("Alguno de los valores que introduciste no es un numero.");
}

function eqcuad(a, b, raiz){
    console.log (raiz)
    var x = (b) + (Math.sqrt(raiz)) / (2 * a);
    return x
}

// alert(eqcuad (80, 1000, 50))