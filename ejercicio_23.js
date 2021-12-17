/**Diseñar el algoritmo que nos permite calcular los n primeros términos de la serie Fibonacci
 *  (donde n es ingresado por el usuario).
 * 
 */

 var PrimerosTerminos = parseInt(prompt ("Introduce la cantidad n que quieres calcular."));

 const fibonacci = (n) => {
 
     // Base case
     if (n < 2) {
         return n;
     }
 
     // Recursive case
     return fibonacci(n - 1) + fibonacci(n - 2);
 }
 
 fibonacci(12);