// Ejercicio 56: menor de dos numeros usando el operador condicional
function menorDeDos(a: number, b: number): number {
    return (a < b) ? a : b;
}

let a: number = 14;  // Simula entrada del usuario
let b: number = 9;
console.log(`El menor entre ${a} y ${b} es ${menorDeDos(a, b)}`);
