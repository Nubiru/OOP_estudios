// Ejercicio 65: pares de numeros, decir si el primero es multiplo del segundo
// Simulamos varios pares con un array bidimensional.
let pares65: number[][] = [[20, 5], [13, 4], [100, 10]];
for (let p of pares65) {
    let a: number = p[0];
    let b: number = p[1];
    if (a % b == 0) {
        console.log(`${a} es multiplo de ${b}`);
    } else {
        console.log(`${a} NO es multiplo de ${b}`);
    }
}
