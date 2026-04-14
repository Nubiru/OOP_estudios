// Ejercicio 46: decir si al menos uno de dos numeros es par
function alMenosUnoPar(a: number, b: number): boolean {
    return a % 2 == 0 || b % 2 == 0;
}

let a: number = 3;  // Simula entrada del usuario
let b: number = 8;
console.log(alMenosUnoPar(a, b) ? "Al menos uno de los dos numeros es par" : "Ninguno de los dos es par");
