// Ejercicio 28
// Autor: Gabriel Osemberg
// Fecha: 2026-04-13
// Objetivo: calcular division y resto de dos numeros introducidos por el usuario.
function dividir28(a: number, b: number): { cociente: number; resto: number } {
    return { cociente: a / b, resto: a % b };
}

let a: number = 100;  // Simula entrada del usuario
let b: number = 7;
let res = dividir28(a, b);
console.log(`${a} / ${b} = ${res.cociente}, resto: ${res.resto}`);
