// Ejercicio 47: decir si uno y solo uno de los dos numeros es par
function soloUnoPar(a: number, b: number): boolean {
    return (a % 2 == 0) != (b % 2 == 0);
}

let a: number = 3;  // Simula entrada del usuario
let b: number = 8;
console.log(soloUnoPar(a, b) ? "Uno y solo uno de los dos es par" : "O los dos son pares, o ninguno lo es");

// Usamos != entre dos booleanos: si uno es true y el otro false, son distintos.
// Esto equivale a un XOR (o exclusivo): exactamente uno de los dos es par.
