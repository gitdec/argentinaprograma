// Paso 2 (EXTRA 1)
const JUGADA_PIEDRA = "piedra";
const JUGADA_PAPEL = "papel";
const JUGADA_TIJERAS = "tijeras";

function obtenerJugadaComputadora() {
  const opciones = [JUGADA_PIEDRA, JUGADA_PAPEL, JUGADA_TIJERAS];
  const indice = Math.floor(Math.random() * 3);
  return opciones[indice];
}

// Paso 3
const readline = require("readline");

function obtenerJugadaUsuario() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question("--- Ingresa tu elección --- \nPuede ser piedra, papel o tijeras. \n", (eleccion) => {
      rl.close();
      eleccion = eleccion.toLowerCase();

      // Validar la elección del usuario
      if (
        eleccion === JUGADA_PIEDRA ||
        eleccion === JUGADA_PAPEL ||
        eleccion === JUGADA_TIJERAS
      ) {
        resolve(eleccion);
      } else {
        console.log("¡Opción inválida! Debes ingresar piedra, papel o tijeras.");
        obtenerJugadaUsuario().then(resolve); // Llamar recursivamente a obtenerJugadaUsuario()
      }
    });
  });
}

// Paso 4 (EXTRA 1)
function determinarGanador(jugadaComputadora, jugadaUsuario) {
  if (jugadaComputadora === jugadaUsuario) {
    return "Empate";
  } else if (
    (jugadaComputadora === JUGADA_PIEDRA && jugadaUsuario === JUGADA_TIJERAS) ||
    (jugadaComputadora === JUGADA_TIJERAS && jugadaUsuario === JUGADA_PAPEL) ||
    (jugadaComputadora === JUGADA_PAPEL && jugadaUsuario === JUGADA_PIEDRA)
  ) {
    return "Gana la computadora";
  } else {
    return "Gana el usuario";
  }
}

// Paso 5 (EXTRA 2)
async function jugar() {
  const jugadasTotales = await obtenerCantidadJugadas();
  let jugadasUsuario = 0;
  let jugadasComputadora = 0;

  for (let i = 1; i <= jugadasTotales; i++) {
    const jugadaComputadora = obtenerJugadaComputadora();
    const jugadaUsuario = await obtenerJugadaUsuario();

    const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

    console.log(
      `--- Resultados de la ronda ${i} de ${jugadasTotales} ---` +
      "\nLa computadora eligió: " +
      jugadaComputadora +
      ". \nEl usuario eligió: " +
      jugadaUsuario +
      ". \nEl resultado fue: " +
      resultado +
      "."
    );

    if (resultado === "Gana el usuario") {
      jugadasUsuario++;
    } else if (resultado === "Gana la computadora") {
      jugadasComputadora++;
    }

    // Verificar si alguno de los jugadores ha alcanzado la cantidad de jugadas necesarias para ganar
    if (jugadasUsuario === jugadasTotales || jugadasComputadora === jugadasTotales) {
      break; // Salir del bucle
    }
  }

  // Verificar resultado final y mostrar el ganador
  let resultadoFinal = "";
  if (jugadasUsuario === jugadasComputadora) {
    resultadoFinal = "--- FUE UN EMPATE ---";
  } else if (jugadasUsuario > jugadasComputadora) {
    resultadoFinal = "¡FELICIDADES, GANASTE EL JUEGO!";
  } else {
    resultadoFinal = "¡SUERTE PARA LA PRÓXIMA, LA COMPUTADORA GANA EL JUEGO!";
  }

  console.log(resultadoFinal);
}

function obtenerCantidadJugadas() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question("VAMOS A JUGAR A PIEDRA, PAPEL O TIJERAS" +
    "\n Las reglas son las siguientes:" +
    "\n 1. Elige la cantidad de rondas que quieres jugar" +
    "\n 2. Si ganas la mayor cantidad de rondas ganarás el juego" +
    "\n Empecemos, ¿cuántas rondas quieres jugar? \n", (cantidad) => {
      rl.close();
      resolve(parseInt(cantidad));
    });
  });
}

jugar();
