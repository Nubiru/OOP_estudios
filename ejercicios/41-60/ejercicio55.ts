// Ejercicio 55: valor absoluto usando el operador condicional (ternario)
function valorAbsoluto(n: number): number {
    return (n >= 0) ? n : -n;
}

let num: number = -7;  // Simula entrada del usuario
console.log(`El valor absoluto de ${num} es ${valorAbsoluto(num)}`);

// Operador ternario: (condicion) ? valorSiTrue : valorSiFalse
// Si n >= 0, lo devuelve tal cual. Si es negativo, le cambia el signo con -n.
// Ejemplo: -7 -> -(-7) = 7.
