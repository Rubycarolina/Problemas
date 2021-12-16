/**Haga una función que utilice números, la ecuación debe resolver ecuaciones cuadráticas 
 * con  la forma ax^2+bx+c=0, ecuCuad(a, b, c) debe retornar la solución positiva de la ecuación 
 *  cuyo parámetros sean a, b y c respectivamente. 
 * 
 */

 var ecuCuad = function(a, b, c) {
    var x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    var x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    return x1 + " " + x2;
}

ecuCuad(1, 2, 1);