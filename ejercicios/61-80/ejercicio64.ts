// Ejercicio 64: calculador de cuadrados, repite mientras el numero no sea cero
let numerosUsuario: number[] = [3, 5, 8, 0];
let j64: number = 0;
let n64: number = numerosUsuario[j64];
while (n64 != 0) {
    console.log(`El cuadrado de ${n64} es ${n64 * n64}`);
    j64++;
    n64 = numerosUsuario[j64];
}
console.log("Fin del programa.");
