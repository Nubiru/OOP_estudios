// Ejercicio 26: millas nauticas a metros (1 milla nautica = 1852 metros)
function millasNauticasAMetros(millas: number): number {
    return millas * 1852;
}

let millas: number = 5;  // Simula entrada del usuario
console.log(`${millas} millas nauticas equivalen a ${millasNauticasAMetros(millas)} metros.`);
