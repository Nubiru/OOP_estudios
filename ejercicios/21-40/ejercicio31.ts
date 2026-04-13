// Ejercicio 31: tabla de multiplicar sin plantillas, concatenando con "Write" (process.stdout.write)
let numero31: number = 4;  // Simula entrada del usuario
for (let i: number = 0; i <= 10; i++) {
    process.stdout.write(numero31 + " x " + i + " = " + (numero31 * i) + "\n");
}
