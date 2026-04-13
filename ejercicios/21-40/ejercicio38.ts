// Ejercicio 38: dividir el primero entre el segundo, con control de division por cero
let a38: number = 40;  // Simula entrada del usuario
let b38: number = 5;   // Simula entrada del usuario
if (b38 != 0) {
    console.log(`${a38} / ${b38} = ${a38 / b38}`);
}
if (b38 == 0) {
    console.log("Error: No se puede dividir entre cero");
}
