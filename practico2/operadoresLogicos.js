const readlineSync = require('readline-sync');

let numero;
let numeroEntero;

do {
  numero = readlineSync.question('Ingrese un numero entero: ');

  if (numero % 1 === 0 || numero === '0') {
    numeroEntero = parseInt(numero);

    if (numeroEntero > 0 && numeroEntero % 2 === 0) {
      console.log('El número es positivo y par');
    } else if (numeroEntero > 0 && numeroEntero % 2 !== 0) {
      console.log('El número es positivo e impar');
    } else if (numeroEntero < 0) {
      console.log('El número es negativo');
    } else if (numeroEntero === 0) {
      console.log('El número es cero');
    }
  } else {
    console.log('Número inválido. Debe ser un número entero.');
  }
} while (numero % 1 !== 0);
