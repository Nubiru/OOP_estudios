// Nivel 4: Crear una clase Animal con propiedad nombre y metodo hacerSonido().
//          Crear una clase Perro que herede de Animal usando extends y super().

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        return `${this.nombre} hace un ruido.`;
    }
}

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre); // llama al constructor de Animal
        this.raza = raza;
    }

    // Polimorfismo: Perro redefine el comportamiento heredado.
    hacerSonido() {
        return `${this.nombre} (${this.raza}) ladra: Guau!`;
    }
}

const animal = new Animal("Animal generico");
const perro = new Perro("Firulais", "Labrador");

console.log(animal.hacerSonido());
console.log(perro.hacerSonido());
console.log("Firulais es un Animal?", perro instanceof Animal);
