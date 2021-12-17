/**Dada una matriz de números ordenados y una suma objetivo, busque un par en la matriz cuya 
 * suma sea igual al objetivo dado. Escriba una función para devolver los índices de los dos 
 * números (es decir, el par) de manera que se sumen al objetivo dado.
Input: [1, 2, 3, 4, 6], sum=6
Output: [1, 3]
Los números en los índices 1 y 3 suman  6: 2+4=6
 */

var array = [2, 3, 3, 3, 6, 9, 9];
function eliminarDuplicados(array) {
    var i = 0;
    var j = 1;
    var aux = 0;
    while (j < array.length) {
        if (array[i] == array[j]) {
            j++;
        } else {
            i++;
            array[i] = array[j];
            j++;
        }
    }
    aux = i + 1;
    return aux;
}
console.log(eliminarDuplicados(array));