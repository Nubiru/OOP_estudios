// Ejercicio 41: responder si un numero es multiplo de 2 o de 3
function esMultiploDe2o3(n: number): string {
    if (n % 2 == 0 || n % 3 == 0) return `${n} es multiplo de 2 o de 3`;
    return `${n} no es multiplo de 2 ni de 3`;
}

console.log(esMultiploDe2o3(9));  // Simula entrada del usuario

// || es el operador OR: basta con que UNA de las dos condiciones sea verdadera.
// 9 % 3 == 0 es true, asi que 9 es multiplo de 3 (no importa que no sea de 2).
