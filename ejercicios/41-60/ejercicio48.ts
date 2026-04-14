// Ejercicio 48: informar sobre los positivos entre dos numeros
function infoPositivos(a: number, b: number): string {
    if (a > 0 && b > 0) return "Los dos numeros son positivos";
    if (a > 0 || b > 0) return "Uno de los numeros es positivo";
    return "Ninguno de los numeros es positivo";
}

console.log(infoPositivos(5, -2));  // Simula entrada del usuario

// if/else if encadenado: primero prueba si los dos son positivos (&&),
// luego si al menos uno lo es (||), y si ninguna condicion se cumple,
// ninguno es positivo. El orden importa: la condicion mas restrictiva va primero.
