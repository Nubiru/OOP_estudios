// Ejercicio 57: numero del 1 al 5 a texto, usando switch
function numeroATexto(n: number): string {
    switch (n) {
        case 1: return "uno";
        case 2: return "dos";
        case 3: return "tres";
        case 4: return "cuatro";
        case 5: return "cinco";
        default: return "fuera de rango";
    }
}

console.log(numeroATexto(3));  // Simula entrada del usuario

// switch compara n con cada case. Cuando encuentra coincidencia, ejecuta ese bloque.
// "return" sale de la funcion directamente (no necesita break).
// "default" se ejecuta si ningun case coincide (como el else final de un if).
