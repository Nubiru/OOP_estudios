// Ejercicio 42: responder si un numero es multiplo de 2 Y de 3 simultaneamente
function esMultiploDe2y3(n: number): string {
    if (n % 2 == 0 && n % 3 == 0) return `${n} es multiplo de 2 y de 3`;
    return `${n} NO es multiplo de 2 y de 3 simultaneamente`;
}

console.log(esMultiploDe2y3(12));  // Simula entrada del usuario

// && es el operador AND: AMBAS condiciones deben ser verdaderas.
// 12 % 2 == 0 y 12 % 3 == 0, las dos son true, asi que cumple.
