/* // Declaración de un arreglo de números
let numeros = [1, 2, 3, 4, 5];

// Acceder a un elemento del arreglo
console.log(numeros[0]); // Imprimirá 1

// Modificar un elemento del arreglo
numeros[2] = 10;
console.log(numeros); // Imprimirá [1, 2, 10, 4, 5]*/


/*/ Definición de un objeto de tipo "Persona"
let persona = {
    nombre: "Juan",
    edad: 25,
    saludar: function() {
      console.log("Hola, mi nombre es " + this.nombre);
    }
  };
  
  // Acceder a las propiedades y llamar a un método del objeto
  console.log(persona.nombre); // Imprimirá "Juan"
  console.log(persona.edad); // Imprimirá 25
  persona.saludar(); // Imprimirá "Hola, mi nombre es Juan"
  
  // Modificar una propiedad del objeto
  persona.edad = 30;
  console.log(persona.edad); // Imprimirá 30*/

  let jugador1 = {
    nombre: "Juan",
    posicion: "arco",
    edad: 28
  };

  let equipo1 = {
    nombre: "Equipo 1",
    jugadores: [
      { nombre: "Juan", posicion: "arco", edad: 28 },
      { nombre: "Pedro", posicion: "defensa", edad: 25 },
      { nombre: "Luis", posicion: "mediocampo", edad: 30 },
      { nombre: "Carlos", posicion: "mediocampo", edad: 27 },
      { nombre: "Miguel", posicion: "adelante", edad: 23 }
    ]
  };
  
  let equiposTorneo = [
    equipo1, equipo2, equipo3, equipo4, equipo5, equipo6, equipo7, equipo8
    // Otros equipos...
  ];
  
  // Recorrer los jugadores del equipo y mostrar sus datos
for (let i = 0; i < equipo1.jugadores.length; i++) {
    let jugador = equipo1.jugadores[i];
    console.log("Nombre: " + jugador.nombre + ", Posición: " + jugador.posicion + 
    ", Edad: " + jugador.edad);
  }

  
