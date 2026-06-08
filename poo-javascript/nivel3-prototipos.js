// Nivel 3: Usar prototipos. Agregamos el metodo caminar() al prototipo de
//          Persona, de modo que TODAS las instancias lo compartan sin duplicar
//          la funcion en cada objeto.

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

// El metodo vive una sola vez en Persona.prototype, no en cada instancia.
Persona.prototype.saludar = function () {
    return `Hola, soy ${this.nombre}.`;
};

Persona.prototype.caminar = function () {
    return `${this.nombre} dice: Estoy caminando`;
};

const persona1 = new Persona("Juan", 30);
const persona2 = new Persona("Ana", 25);

console.log(persona1.saludar());
console.log(persona1.caminar());
console.log(persona2.caminar());

// Ambas instancias comparten exactamente la misma funcion del prototipo:
console.log("Comparten el mismo metodo caminar?", persona1.caminar === persona2.caminar);
