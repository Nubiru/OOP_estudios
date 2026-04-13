// Ejercicio 70: dar al usuario tres oportunidades para adivinar un numero del 1 al 10
//
// Diagrama de flujo:
//
//   [Inicio]
//      |
//   [secreto = 7]
//      |
//   [intento = 0]
//      |
//   <intento < 3?> -- No --> [Fin]
//      | Si
//   [Pedir numero]
//      |
//   <numero == secreto?> -- Si --> [Acertaste!] -> [Fin]
//      | No
//   [intento++]
//      |
//      `--------- volver al while
//
// Simulamos los intentos del usuario con un array.
let secreto: number = 7;
let intentosUsuario: number[] = [3, 9, 7];
let acertado: boolean = false;
for (let k: number = 0; k < 3; k++) {
    let intento: number = intentosUsuario[k];
    console.log(`Intento ${k + 1}: ${intento}`);
    if (intento == secreto) {
        console.log("Acertaste!");
        acertado = true;
        break;
    }
}
if (!acertado) {
    console.log(`Se acabaron los intentos. El numero era ${secreto}`);
}
