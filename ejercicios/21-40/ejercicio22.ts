// Ejercicio 22: convertir metros a millas (1 milla = 1609 metros)
function metrosAMillas(metros: number): number {
    return metros / 1609;
}

let metros: number = 3000;
console.log(`${metros} metros equivalen a ${metrosAMillas(metros)} millas.`);
