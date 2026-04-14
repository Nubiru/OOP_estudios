// Ejercicio 43: responder si un numero es multiplo de 2 pero NO de 3
function multiploDe2NoDE3(n: number): string {
    if (n % 2 == 0 && n % 3 != 0) return `${n} es multiplo de 2 pero no de 3`;
    return `${n} no cumple la condicion`;
}

console.log(multiploDe2NoDE3(8));  // Simula entrada del usuario

// Combinamos && con != para pedir: "es de 2 PERO no de 3".
// 8 % 2 == 0 (true) y 8 % 3 != 0 (true) -> cumple.
