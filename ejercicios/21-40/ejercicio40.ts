// Ejercicio 40: mejora del ejercicio 38 usando "else"
function dividir40(a: number, b: number): void {
    if (b != 0) {
        console.log(`${a} / ${b} = ${a / b}`);
    } else {
        console.log("Error: No se puede dividir entre cero");
    }
}

dividir40(50, 0);  // Simula entrada del usuario
