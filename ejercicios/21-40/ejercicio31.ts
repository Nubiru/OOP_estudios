// Ejercicio 31: tabla de multiplicar sin plantillas, usando "Write" (process.stdout.write)
function tablaMultiplicarWrite(n: number): void {
    for (let i: number = 0; i <= 10; i++) {
        process.stdout.write(n + " x " + i + " = " + (n * i) + "\n");
    }
}

tablaMultiplicarWrite(4);  // Simula entrada del usuario

// process.stdout.write escribe texto sin saltar de linea automaticamente.
// Por eso agregamos "\n" al final de cada linea manualmente.
// Es el equivalente a "Write" en C#. console.log siempre agrega un salto de linea.
