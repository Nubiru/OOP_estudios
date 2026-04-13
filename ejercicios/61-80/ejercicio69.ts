// Ejercicio 69: cuantas cifras tiene un numero entero positivo
let n69: number = 47829;  // Simula entrada del usuario
let cifras: number = 0;
let aux: number = n69;
if (aux == 0) {
    cifras = 1;
} else {
    while (aux > 0) {
        aux = Math.floor(aux / 10);
        cifras++;
    }
}
console.log(`${n69} tiene ${cifras} cifras`);
