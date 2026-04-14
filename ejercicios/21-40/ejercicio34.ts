// Ejercicio 34: decir cual de dos numeros es el mayor
function mayor34(a: number, b: number): number {
    if (a > b) return a;
    return b;
}

let a: number = 12;  // Simula entrada del usuario
let b: number = 27;
console.log(`El mayor es ${mayor34(a, b)}`);
