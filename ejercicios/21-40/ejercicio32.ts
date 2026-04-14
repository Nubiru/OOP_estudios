// Ejercicio 32: convertir grados Celsius a Kelvin y Fahrenheit
function convertirCelsius(celsius: number): { kelvin: number; fahrenheit: number } {
    return { kelvin: celsius + 273, fahrenheit: celsius * 18 / 10 + 32 };
}

let celsius: number = 25;  // Simula entrada del usuario
let conv = convertirCelsius(celsius);
process.stdout.write(celsius + " C = " + conv.kelvin + " K = " + conv.fahrenheit + " F\n");

// La funcion retorna un objeto { kelvin, fahrenheit } con ambos valores.
// Esto permite devolver mas de un resultado desde una sola funcion.
// Luego accedemos a cada valor con conv.kelvin y conv.fahrenheit.
