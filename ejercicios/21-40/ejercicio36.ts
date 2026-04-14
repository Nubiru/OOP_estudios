// Ejercicio 36: si el primer numero es multiplo de 10, pedir un segundo
function esMultiploDe10(n: number): boolean {
    return n % 10 == 0;
}

let num1: number = 30;  // Simula entrada del usuario
let num2: number = 70;  // Simula segunda entrada
if (esMultiploDe10(num1)) {
    console.log(`${num1} es multiplo de 10`);
    if (esMultiploDe10(num2)) {
        console.log(`${num2} tambien es multiplo de 10`);
    }
}
