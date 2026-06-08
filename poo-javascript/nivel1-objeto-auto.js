// Nivel 1: Crear un objeto "auto" con marca, modelo y un metodo arrancar().
//          Luego acceder a una de sus propiedades.

const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    arrancar: function () {
        return `El ${this.marca} ${this.modelo} esta arrancando...`;
    },
};

// Acceder a una propiedad del objeto
console.log("Marca del auto:", auto.marca);

// Invocar el metodo
console.log(auto.arrancar());
