// Ejercicio 44: responder si un numero NO es multiplo de 2 ni de 3
function noMultiploDe2ni3(n: number): string {
    if (n % 2 != 0 && n % 3 != 0) return `${n} no es multiplo de 2 ni de 3`;
    return `${n} es multiplo de 2 o de 3`;
}

console.log(noMultiploDe2ni3(25));  // Simula entrada del usuario

// != 0 en ambas condiciones: "ni de 2, ni de 3".
// 25 % 2 = 1 (no es de 2) y 25 % 3 = 1 (no es de 3) -> cumple.
