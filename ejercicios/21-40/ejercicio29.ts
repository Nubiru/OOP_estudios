// Ejercicio 29: mostrar (a+b)*(a-b) y a^2 - b^2 en la misma linea
function operacion29(a: number, b: number): { r1: number; r2: number } {
    return { r1: (a + b) * (a - b), r2: a * a - b * b };
}

let a: number = 8;  // Simula entrada del usuario
let b: number = 3;
let res = operacion29(a, b);
console.log(`(a+b)*(a-b) = ${res.r1}, a^2 - b^2 = ${res.r2}`);
