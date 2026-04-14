// Ejercicio 60: repetir el ejercicio 57 pero con if en vez de switch
function numeroATextoIf(n: number): string {
    if (n == 1) return "uno";
    if (n == 2) return "dos";
    if (n == 3) return "tres";
    if (n == 4) return "cuatro";
    if (n == 5) return "cinco";
    return "fuera de rango";
}

console.log(numeroATextoIf(4));  // Simula entrada del usuario

// Misma logica que el ejercicio 57 pero con if en vez de switch.
// Cada if comprueba un valor. Si coincide, retorna el texto y sale.
// El return final (sin if) hace de "default".
