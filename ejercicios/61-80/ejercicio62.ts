// Ejercicio 62: repetir el ejercicio 59 pero con if en vez de switch
function clasificarLetraIf(letra: string): string {
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        return "Vocal";
    } else if (letra >= "0" && letra <= "9") {
        return "Cifra numerica";
    } else {
        return "Consonante";
    }
}

console.log(clasificarLetraIf("b"));  // Simula entrada del usuario
