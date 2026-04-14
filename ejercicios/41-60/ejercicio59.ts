// Ejercicio 59: clasificar letra con switch (vocal, cifra, consonante)
function clasificarLetra(letra: string): string {
    switch (letra) {
        case "a": case "e": case "i": case "o": case "u":
            return "Vocal";
        case "0": case "1": case "2": case "3": case "4":
        case "5": case "6": case "7": case "8": case "9":
            return "Cifra numerica";
        default:
            return "Consonante";
    }
}

console.log(clasificarLetra("e"));  // Simula entrada del usuario
