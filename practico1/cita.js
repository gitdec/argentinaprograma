let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";

// a. Recuperar la longitud de la cita
let tamañoDeCita = cita.length;

// Imprimir el tamaño de la cita por consola
console.log("El tamaño de la cita es: " + tamañoDeCita);

// b. Buscar la posición del índice del substring en la cita
let indice = cita.indexOf(substring);

// Imprimir el índice del substring por consola
console.log("El índice del substring es: " + indice);

// Recortar la cita original a "Tres tristes tigres comen trigo"
let citaRevisada = cita.substring(0, indice) + substring;

// Imprimir la cita revisada por consola
console.log(citaRevisada);
