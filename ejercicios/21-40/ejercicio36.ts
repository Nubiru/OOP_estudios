// Ejercicio 36: si el primer numero es multiplo de 10, pedir un segundo
let num36a: number = 30;   // Simula entrada del usuario
let num36b: number = 70;   // Simula segunda entrada del usuario
if (num36a % 10 == 0) {
    console.log(`${num36a} es multiplo de 10`);
    if (num36b % 10 == 0) {
        console.log(`${num36b} tambien es multiplo de 10`);
    }
}
