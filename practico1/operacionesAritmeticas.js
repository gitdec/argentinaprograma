// a. Variables numéricas
let var1 = 3;
let var2 = 7;
let var3 = 10;
let var4 = 6;

// b. Suma las dos primeras variables
let suma = var1 + var2;

// c. Resta la cuarta variable de la tercera
let resta = var3 - var4;

// d. Multiplica los resultados anteriores
let resultadoFinal = suma * resta;

// e. Verifica si resultadoFinal es un número par
let esPar = resultadoFinal % 2 === 0;

// f. Imprime el mensaje formateado
console.log("Mis variables iniciales fueron: %i, %i, %i y %i. La respuesta a verificar si el resultado final es par es: %s", 
var1, var2, var3, var4, esPar);
