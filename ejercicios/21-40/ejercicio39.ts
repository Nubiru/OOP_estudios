// Ejercicio 39: mejora del ejercicio 37 usando "else"
function multiplicar39(primero: number, segundo: number): void {
    if (primero == 0) {
        console.log("El producto de 0 por cualquier numero es 0");
    } else {
        console.log(`El producto de ${primero} y ${segundo} es: ${primero * segundo}`);
    }
}

multiplicar39(6, 8);  // Simula entrada del usuario

// Con else, si la primera condicion es verdadera ya no evalua la segunda.
// Es mas eficiente y claro que usar dos if separados como en el ej. 37.
