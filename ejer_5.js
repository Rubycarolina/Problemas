/*Escriba un programa que lea dos números positivos 
(debes controlar que solo ingresen  positivos, 
si ingresan negativos debes dar un alert de error) y 
muestre por consola el  resultado de multiplicarlos 
por sumas repetidas. */

var num1 = 1 * prompt ("Introduce un numero");

var num2 = 1 * prompt ("Introduce otro numero");

result = 0;

if (num1 <= 0 || num2 <= 0) {
    alert ("ERROR (Los dos numeros deben ser positivos)");
} else {
var i = 0;
    while (i < num2){
        result += num1;
        i++;
    }
    alert ("Este es el resultado " + result);
}