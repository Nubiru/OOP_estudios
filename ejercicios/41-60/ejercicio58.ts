// Ejercicio 58: clasificar caracter con switch (puntuacion, cifra, otro)
function clasificarCaracter(simbolo: string): string {
    switch (simbolo) {
        case ".": case ",": case ";": case ":":
            return "Signo de puntuacion";
        case "0": case "1": case "2": case "3": case "4":
        case "5": case "6": case "7": case "8": case "9":
            return "Cifra numerica";
        default:
            return "Otro caracter";
    }
}

console.log(clasificarCaracter(";"));  // Simula entrada del usuario

// Varios case seguidos sin codigo entre ellos comparten el mismo bloque.
// case ".": case ",": case ";": case ":" todos ejecutan el mismo return.
// Es como decir: "si es punto O coma O punto y coma O dos puntos..."
