// Ejercicio 65: pares de numeros, decir si el primero es multiplo del segundo
function esMultiplo(a: number, b: number): string {
    if (a % b == 0) return `${a} es multiplo de ${b}`;
    return `${a} NO es multiplo de ${b}`;
}

let pares: number[][] = [[20, 5], [13, 4], [100, 10]];  // Simula pares del usuario
for (let p of pares) {
    console.log(esMultiplo(p[0], p[1]));
}

// number[][] es un array de arrays (array bidimensional).
// Cada elemento p es un par [a, b]. p[0] es el primero, p[1] es el segundo.
// for...of recorre cada par del array automaticamente.
