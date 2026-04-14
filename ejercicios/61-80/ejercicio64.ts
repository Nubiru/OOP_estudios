// Ejercicio 64: calculador de cuadrados, repite mientras el numero no sea cero
function calculadorCuadrados(numeros: number[]): void {
    let i: number = 0;
    let n: number = numeros[i];
    while (n != 0) {
        console.log(`El cuadrado de ${n} es ${n * n}`);
        i++;
        n = numeros[i];
    }
    console.log("Fin del programa.");
}

calculadorCuadrados([3, 5, 8, 0]);  // Simula entradas del usuario

// El while repite mientras n no sea 0. Cuando llega al 0, para.
// n * n es el cuadrado de n (ej: 3*3=9, 5*5=25).
// El 0 al final del array actua como "senial de parada" del bucle.
