// Ejercicio 66: mejora del 65, comprobar si el primero es multiplo del segundo,
// el segundo es multiplo del primero, o ninguno.
let pares66: number[][] = [[20, 5], [4, 13], [7, 9]];
for (let p of pares66) {
    let a: number = p[0];
    let b: number = p[1];
    if (a % b == 0) {
        console.log(`${a} es multiplo de ${b}`);
    } else if (b % a == 0) {
        console.log(`${b} es multiplo de ${a}`);
    } else {
        console.log(`Ninguno es multiplo del otro (${a}, ${b})`);
    }
}
