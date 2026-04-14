// Ejercicio 63: pedir contrasena hasta que se introduzca 1111
function verificarContrasena(intentos: number[]): void {
    let i: number = 0;
    let password: number = intentos[i];
    while (password != 1111) {
        console.log(`Contrasena incorrecta: ${password}`);
        i++;
        password = intentos[i];
    }
    console.log("Contrasena correcta. Bienvenido!");
}

verificarContrasena([1234, 9999, 1111]);  // Simula intentos del usuario

// while repite el bloque mientras la condicion sea verdadera.
// Cuando password == 1111, la condicion (password != 1111) es false y sale del bucle.
// Usamos un array para simular los intentos que haria el usuario por teclado.
