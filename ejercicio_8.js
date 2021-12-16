/**El inventor del ajedrez. De acuerdo con una leyenda, 
 * el rey estuvo tan complacido con el  invento del ajedrez
 *  que llamo al autor a su corte para que le indicara que recompensa quería  recibir por su 
 * creatividad. El inventor le dijo: “Todo lo que pido es un grano de trigo por la  
 * primera cuadricula de mi tablero, dos granos por la segunda casilla, 
 * cuatro granos por la  tercera y así sucesivamente hasta llegar a las 64 casillas, 
 * siempre doblando el número de granos de trigo”. Haga un programa que le ayude al 
 * rey a tomar esta decisión. Haga una estimación del peso de un grano de trigo y “pese” 
 * la cantidad resultante. ¿Qué tamaño de  palabra necesitará tener la máquina en que se 
 * pueda correr dicho programa?
 */

 const casillas = 64;

 var peso = parseInt (prompt ("Introduce cuanto pesa un grano de trigo en gramos."));
 
 var resultado = 0;
 
 var peso_final = 0;
 
 for (i = 1; i <= casillas; ++i) {
     resultado = resultado + 2 ** i;
 } 
 
 peso_final = resultado * peso;
 
 if (peso_final < 5972 * (10 ** 27)){
     alert("Pesa " + peso_final + " gramos.");
 } else if (peso_final > 5972 * (10 ** 27)){
     alert("El peso es ridiculamente grande, su peso seria mayor que el de la tierra.");
 }