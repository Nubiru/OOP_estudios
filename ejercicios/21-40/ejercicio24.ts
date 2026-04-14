// Ejercicio 24: division y resto de dos numeros introducidos por el usuario
function dividir(a: number, b: number): { cociente: number; resto: number } {
    return { cociente: a / b, resto: a % b };
}

let dividendo: number = 25;  // Simula entrada del usuario
let divisor: number = 4;
let resultado = dividir(dividendo, divisor);
console.log(`${dividendo} / ${divisor} = ${resultado.cociente}, resto: ${resultado.resto}`);
