// Ejercicio 61: repetir el ejercicio 58 pero con if en vez de switch
function clasificarCaracterIf(simbolo: string): string {
    if (simbolo == "." || simbolo == "," || simbolo == ";" || simbolo == ":") {
        return "Signo de puntuacion";
    } else if (simbolo >= "0" && simbolo <= "9") {
        return "Cifra numerica";
    } else {
        return "Otro caracter";
    }
}

console.log(clasificarCaracterIf("5"));  // Simula entrada del usuario

// simbolo >= "0" && simbolo <= "9" compara caracteres por su codigo ASCII.
// Los digitos 0-9 estan consecutivos en ASCII, asi que esta comparacion
// detecta cualquier cifra sin necesidad de listar los 10 cases como en el switch.
