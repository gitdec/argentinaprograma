const readlineSync = require('readline-sync');

const meses = {
  1: "enero",
  2: "febrero",
  3: "marzo",
  4: "abril",
  5: "mayo",
  6: "junio",
  7: "julio",
  8: "agosto",
  9: "septiembre",
  10: "octubre",
  11: "noviembre",
  12: "diciembre"
};

let numeroMes;
let mes;

do {
  numeroMes = readlineSync.questionInt("Ingrese un numero de mes (1-12): ");

  if (numeroMes >= 1 && numeroMes <= 12) {
    mes = meses[numeroMes];
  } else {
    console.log('Numero de mes inválido. Debe ser un numero entre 1 y 12.');
  }
} while (numeroMes < 1 || numeroMes > 12);

let cantidadDias;

if (numeroMes === 2) {
  cantidadDias = 28;
} else if (numeroMes === 4 || numeroMes === 6 || numeroMes === 9 || numeroMes === 11) {
  cantidadDias = 30;
} else {
  cantidadDias = 31;
}

console.log(`La cantidad de días del mes de ${mes} es ${cantidadDias}`);
