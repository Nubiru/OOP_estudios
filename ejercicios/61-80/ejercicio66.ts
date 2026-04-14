// Ejercicio 66: mejora del 65, comprobar en ambas direcciones
function comprobarMultiplos(a: number, b: number): string {
    if (a % b == 0) return `${a} es multiplo de ${b}`;
    if (b % a == 0) return `${b} es multiplo de ${a}`;
    return `Ninguno es multiplo del otro (${a}, ${b})`;
}

let pares: number[][] = [[20, 5], [4, 13], [7, 9]];  // Simula pares del usuario
for (let p of pares) {
    console.log(comprobarMultiplos(p[0], p[1]));
}

// Primero comprueba si a es multiplo de b (a % b == 0).
// Si no, comprueba al reves: si b es multiplo de a (b % a == 0).
// Si ninguna se cumple, no son multiplos entre si.
