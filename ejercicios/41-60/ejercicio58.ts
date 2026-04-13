// Ejercicio 58: caracter tecleado, usando switch para decidir si es signo
// de puntuacion, cifra numerica u otro caracter.
let simbolo58: string = ";";  // Simula entrada del usuario
switch (simbolo58) {
    case ".": case ",": case ";": case ":":
        console.log("Signo de puntuacion");
        break;
    case "0": case "1": case "2": case "3": case "4":
    case "5": case "6": case "7": case "8": case "9":
        console.log("Cifra numerica");
        break;
    default:
        console.log("Otro caracter");
        break;
}
