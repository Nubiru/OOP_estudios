// Ejercicio 63: pedir contrasena hasta que se introduzca 1111
// Simulamos la lista de intentos del usuario con un array.
let intentos: number[] = [1234, 9999, 1111, 5555];
let i63: number = 0;
let password: number = intentos[i63];
while (password != 1111) {
    console.log(`Contrasena incorrecta: ${password}`);
    i63++;
    password = intentos[i63];
}
console.log("Contrasena correcta. Bienvenido!");
