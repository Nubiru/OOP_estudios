// Ejercicio 49: mostrar cual es el mayor de tres numeros
function mayorDeTres(a: number, b: number, c: number): number {
    let mayor: number = a;
    if (b > mayor) mayor = b;
    if (c > mayor) mayor = c;
    return mayor;
}

console.log(`El mayor es: ${mayorDeTres(8, 15, 12)}`);  // Simula entrada del usuario

// Patron clasico: asumimos que el mayor es el primero (a),
// luego comparamos con b y c. Si alguno es mas grande, lo reemplazamos.
// Al final, "mayor" contiene el mas grande de los tres.
