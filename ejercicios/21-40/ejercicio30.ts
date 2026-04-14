// Ejercicio 30: tabla de multiplicar usando template literals
function tablaMultiplicar(n: number): void {
    for (let i: number = 0; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

tablaMultiplicar(3);  // Simula entrada del usuario

// void: la funcion no retorna nada, solo imprime.
// El for recorre i de 0 a 10. En cada vuelta imprime una linea de la tabla.
