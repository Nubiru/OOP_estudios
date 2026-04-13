// Ejercicio 61: repetir el ejercicio 58 pero con if en vez de switch
let simbolo61: string = "5";  // Simula entrada del usuario
if (simbolo61 == "." || simbolo61 == "," || simbolo61 == ";" || simbolo61 == ":") {
    console.log("Signo de puntuacion");
} else if (simbolo61 >= "0" && simbolo61 <= "9") {
    console.log("Cifra numerica");
} else {
    console.log("Otro caracter");
}
