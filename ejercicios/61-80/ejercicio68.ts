// Ejercicio 68: numeros pares del 26 al 10, descendiendo, con "while"
function paresDescendiendo(desde: number, hasta: number): void {
    let i: number = desde;
    while (i >= hasta) {
        console.log(i);
        i -= 2;
    }
}

paresDescendiendo(26, 10);

// i -= 2 es lo mismo que i = i - 2 (resta 2 en cada vuelta).
// Al restar de 2 en 2 desde un numero par, solo visitamos numeros pares.
// El bucle baja: 26, 24, 22, 20, 18, 16, 14, 12, 10.
