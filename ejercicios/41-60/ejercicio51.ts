// Ejercicio 51: variante con la comparacion de igualdad correcta
// y con las variables en el lado derecho, los numeros en el lado izquierdo.
function comparar51(a: number, b: number): string {
    if (5 == a && 5 == b) return "Ambos valen 5";
    return "Al menos uno no vale 5";
}

console.log(comparar51(5, 5));

// "Condiciones Yoda": el numero va a la izquierda (5 == a) en vez de (a == 5).
// Es una tecnica de C# para evitar errores: si escribis = en vez de ==,
// el compilador te avisa porque no podes asignar a un numero literal.
