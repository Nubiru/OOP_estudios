// Ejercicio 43: responder si un numero es multiplo de 2 pero NO de 3
let n43: number = 8;  // Simula entrada del usuario
if (n43 % 2 == 0 && n43 % 3 != 0) {
    console.log(`${n43} es multiplo de 2 pero no de 3`);
} else {
    console.log(`${n43} no cumple la condicion`);
}
