// Ejercicio 47: decir si uno y solo uno de los dos numeros es par
let a47: number = 3;  // Simula entrada del usuario
let b47: number = 8;  // Simula entrada del usuario
let aPar: boolean = a47 % 2 == 0;
let bPar: boolean = b47 % 2 == 0;
if (aPar != bPar) {
    console.log("Uno y solo uno de los dos es par");
} else {
    console.log("O los dos son pares, o ninguno lo es");
}
