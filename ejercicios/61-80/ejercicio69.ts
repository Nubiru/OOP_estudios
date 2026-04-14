// Ejercicio 69: cuantas cifras tiene un numero entero positivo
function contarCifras(n: number): number {
    if (n == 0) return 1;
    let cifras: number = 0;
    let aux: number = n;
    while (aux > 0) {
        aux = Math.floor(aux / 10);
        cifras++;
    }
    return cifras;
}

let num: number = 47829;  // Simula entrada del usuario
console.log(`${num} tiene ${contarCifras(num)} cifras`);

// "aux" es una copia auxiliar del numero para no modificar el original.
// Math.floor(aux / 10) quita la ultima cifra: 47829 -> 4782 -> 478 -> 47 -> 4 -> 0.
// En cada vuelta contamos una cifra. Cuando aux llega a 0, ya contamos todas.
// Caso especial: si n es 0, tiene 1 cifra (el propio 0).
