// Ejercicio 70: dar al usuario tres oportunidades para adivinar un numero del 1 al 10
//
// Diagrama de flujo:
//   [Inicio] -> [secreto = 7] -> [intento = 0]
//   -> <intento < 3?> -- No -> "Se acabaron los intentos" -> [Fin]
//      | Si -> [Pedir numero] -> <numero == secreto?> -- Si -> "Acertaste!" -> [Fin]
//                                   | No -> [intento++] -> volver al while

function adivinarNumero(secreto: number, intentos: number[]): void {
    let acertado: boolean = false;
    for (let k: number = 0; k < 3; k++) {
        let intento: number = intentos[k];
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
}

adivinarNumero(7, [3, 9, 7]);  // Simula intentos del usuario

// "acertado" es una bandera (flag): empieza en false y cambia a true si adivina.
// "break" sale del for inmediatamente cuando el usuario acierta (no hace falta seguir).
// Al final, si acertado sigue en false, se acabaron los 3 intentos sin exito.
