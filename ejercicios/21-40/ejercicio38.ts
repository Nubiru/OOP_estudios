// Ejercicio 38: dividir el primero entre el segundo, con control de division por cero
function dividir38(a: number, b: number): void {
    if (b != 0) {
        console.log(`${a} / ${b} = ${a / b}`);
    }
    if (b == 0) {
        console.log("Error: No se puede dividir entre cero");
    }
}

dividir38(40, 5);  // Simula entrada del usuario

// Mismo patron que el 37: dos if separados sin else.
// El ejercicio 40 lo mejora usando else.
