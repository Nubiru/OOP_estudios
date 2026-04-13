// Ejercicio 59: letra tecleada por el usuario, usando switch para decidir
// si es vocal, cifra numerica o consonante.
let letra59: string = "e";  // Simula entrada del usuario
switch (letra59) {
    case "a": case "e": case "i": case "o": case "u":
        console.log("Vocal");
        break;
    case "0": case "1": case "2": case "3": case "4":
    case "5": case "6": case "7": case "8": case "9":
        console.log("Cifra numerica");
        break;
    default:
        console.log("Consonante");
        break;
}
