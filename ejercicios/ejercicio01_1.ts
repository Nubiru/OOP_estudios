// Ejercicio 1.1: Saludo con input desde HTML
function saludar(): void {
    const input = document.getElementById("nombre") as HTMLInputElement;
    const resultado = document.getElementById("resultado") as HTMLParagraphElement;
    resultado.textContent = `Hola, ${input.value}`;
}
