// Ejercicio 67: escribir los numeros del 1 al 10 usando "while"
function contarHasta(limite: number): void {
    let i: number = 1;
    while (i <= limite) {
        console.log(i);
        i++;
    }
}

contarHasta(10);

// i++ es lo mismo que i = i + 1 (incrementa en 1).
// El while evalua la condicion ANTES de cada vuelta.
// Cuando i llega a 11, la condicion i <= 10 es false y el bucle termina.
