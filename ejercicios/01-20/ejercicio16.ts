// Ejercicio 16: resto de dividir 3784 entre 16 usando variables
function resto(dividendo: number, divisor: number): number {
    return dividendo % divisor;
}

let dividendo: number = 3784;
let divisor: number = 16;
console.log(`El resto de dividir ${dividendo} entre ${divisor} es: ${resto(dividendo, divisor)}`);
