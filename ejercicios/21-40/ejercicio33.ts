// Ejercicio 33: decir si un numero es par
function esPar(n: number): boolean {
    return n % 2 == 0;
}

let num: number = 8;  // Simula entrada del usuario
if (esPar(num)) {
    console.log(`${num} es par.`);
}

// n % 2 calcula el resto de dividir n entre 2.
// Si el resto es 0, el numero es par. Si es 1, es impar.
