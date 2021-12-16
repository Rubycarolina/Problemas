/**Dada una matriz de números positivos y un número positivo "k",
 * encuentre la suma máxima de cualquier submatriz contigua de tamaño "k".
 * 
 * Input: [2, 1, 5, 1, 3, 2],  k=3
 * Output: 9
 * Resultado con la máxima suma es [5, 1, 3] = 5+1+3 = 9.
 */

 var matriz = [1, 2, 3, 4, 6];
 var sum = 6;
 function searchPair(matriz, sum) {
     var i = 0;
     var j = matriz.length - 1;
     while (i < j) {
         if (matriz[i] + matriz[j] == sum) {
             return [i, j];
         } else if (matriz[i] + matriz[j] < sum) {
             i++;
         } else {
             j--;
         }
     }
 }
 console.log(searchPair(matriz, sum));