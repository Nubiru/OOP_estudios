// Ejercicio 62: repetir el ejercicio 59 pero con if en vez de switch
let letra62: string = "b";  // Simula entrada del usuario
if (letra62 == "a" || letra62 == "e" || letra62 == "i" || letra62 == "o" || letra62 == "u") {
    console.log("Vocal");
} else if (letra62 >= "0" && letra62 <= "9") {
    console.log("Cifra numerica");
} else {
    console.log("Consonante");
}
