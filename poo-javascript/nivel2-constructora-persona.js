// Nivel 2: Crear una funcion constructora Persona con nombre, edad y un metodo
//          saludar(). Crear 2 personas usando new.

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function () {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} anios.`;
    };
}

const persona1 = new Persona("Juan", 30);
const persona2 = new Persona("Ana", 25);

console.log(persona1.saludar());
console.log(persona2.saludar());
