// Ejercicio 35: decir si el primer numero es multiplo del segundo
function esMultiplo(a: number, b: number): boolean {
    return a % b == 0;
}

let a: number = 20;  // Simula entrada del usuario
let b: number = 5;
if (esMultiplo(a, b)) {
    console.log(`${a} es multiplo de ${b}`);
}

// a % b == 0 significa que a se divide exactamente por b, sin resto.
// Ejemplo: 20 % 5 == 0 -> 20 es multiplo de 5.
