// Ejercicio 32: convertir grados Celsius a Kelvin y Fahrenheit
let celsius: number = 25;  // Simula entrada del usuario
let kelvin: number = celsius + 273;
let fahrenheit: number = celsius * 18 / 10 + 32;
process.stdout.write(celsius + " C = " + kelvin + " K = " + fahrenheit + " F\n");
