// Ejercicio 50: decir si dos numeros son iguales, y si no, cual es el mayor
function compararDos(a: number, b: number): string {
    if (a == b) return `${a} y ${b} son iguales`;
    if (a > b) return `El mayor es ${a}`;
    return `El mayor es ${b}`;
}

console.log(compararDos(7, 11));  // Simula entrada del usuario
