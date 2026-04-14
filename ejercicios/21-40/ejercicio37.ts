// Ejercicio 37: multiplicar dos numeros, con caso especial si el primero es 0
function multiplicar37(primero: number, segundo: number): void {
    if (primero == 0) {
        console.log("El producto de 0 por cualquier numero es 0");
    }
    if (primero != 0) {
        console.log(`El producto de ${primero} y ${segundo} es: ${primero * segundo}`);
    }
}

multiplicar37(0, 15);   // Simula entrada del usuario

// Este ejercicio usa dos if separados (sin else) a proposito.
// El ejercicio 39 lo mejora reemplazando el segundo if por un else.
