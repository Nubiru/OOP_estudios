// Ejercicio 45: decir si dos numeros son ambos pares
function ambosPares(a: number, b: number): boolean {
    return a % 2 == 0 && b % 2 == 0;
}

let a: number = 4;   // Simula entrada del usuario
let b: number = 10;
console.log(ambosPares(a, b) ? "Ambos numeros son pares" : "No son ambos pares");

// El operador ternario (condicion ? si : no) es un if/else en una sola linea.
// Si ambosPares() retorna true, imprime el primer texto; si no, el segundo.
