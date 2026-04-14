// Ejercicio 17: ampliacion del ejercicio 13 para mostrar n1 + n2 * n3
function operacion17(n1: number, n2: number, n3: number): number {
    return n1 + n2 * n3;
}

let n1: number = 5, n2: number = 10, n3: number = 15;
console.log(`El resultado de ${n1} + ${n2} * ${n3} es: ${operacion17(n1, n2, n3)}`);
