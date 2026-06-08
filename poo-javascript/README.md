# POO en JavaScript — Ejercicios y preguntas

**Alumno:** Gabriel Osemberg
**Actividad:** Resumen POO en JavaScript (04-05-2026)

Ejercicios resueltos en **JavaScript** sobre los pilares de la POO (encapsulacion,
abstraccion, herencia y polimorfismo) y el modelo de prototipos del lenguaje.

## Ejecutar los ejercicios

Cada nivel es un archivo independiente que se ejecuta con Node.js:

```bash
node nivel1-objeto-auto.js
node nivel2-constructora-persona.js
node nivel3-prototipos.js
node nivel4-herencia-animal.js
node nivel5-cuenta-bancaria.js
```

## Ejercicios

| Nivel | Archivo | Tema |
|-------|---------|------|
| 1 | `nivel1-objeto-auto.js` | Objeto literal con propiedades y un metodo |
| 2 | `nivel2-constructora-persona.js` | Funcion constructora + `new` |
| 3 | `nivel3-prototipos.js` | Metodos en el `prototype` |
| 4 | `nivel4-herencia-animal.js` | Clases ES6, `extends`, `super()` y polimorfismo |
| 5 | `nivel5-cuenta-bancaria.js` | Encapsulacion con campos privados (`#saldo`) |

## Preguntas para estudiar

### Conceptuales

**¿Que es un objeto en JavaScript?**
Una estructura que agrupa datos (propiedades) y comportamiento (metodos) como pares
clave-valor. Es la unidad central del lenguaje: casi todo en JS es un objeto.

**¿Que diferencia hay entre clase y objeto?**
La clase es la plantilla o molde que describe como sera algo; el objeto es una
instancia concreta creada a partir de esa plantilla. `class Animal {}` es la clase;
`new Animal("Firulais")` es un objeto.

**¿Que es un prototipo?**
Es un objeto del que otro objeto hereda propiedades y metodos. Cada objeto tiene un
enlace interno a su prototipo, formando la *prototype chain* (cadena de prototipos).

**¿Que hace la palabra `new`?**
1) Crea un objeto vacio nuevo, 2) asigna `this` a ese objeto, 3) conecta el objeto
con el `prototype` de la funcion constructora, y 4) lo devuelve automaticamente.

**¿Por que JS no es realmente orientado a clases?**
Porque internamente no usa clases sino **prototipos**. Las clases ES6 son "azucar
sintactico": una forma mas comoda de escribir lo que por debajo sigue siendo
herencia basada en prototipos.

### Tecnicas

**¿Que diferencia hay entre un metodo dentro del constructor y uno en `prototype`?**
- En el constructor: cada instancia tiene **su propia copia** de la funcion (gasta
  mas memoria).
- En el `prototype`: existe **una sola copia compartida** por todas las instancias
  (mas eficiente). Ver `nivel2` vs `nivel3`.

**¿Que hace `extends`?**
Establece herencia: una clase pasa a heredar propiedades y metodos de otra clase base.

**¿Para que sirve `super()`?**
Para llamar al constructor (o a metodos) de la clase padre desde la clase hija. Es
obligatorio llamarlo antes de usar `this` en el constructor de la subclase.

**¿Que es la prototype chain?**
La cadena de prototipos por la que JS busca una propiedad: si no la encuentra en el
objeto, sube a su prototipo, y asi sucesivamente hasta `Object.prototype` y
finalmente `null`. Ejemplo: `obj -> Object.prototype -> null`.

### Pensamiento

**¿Cuando conviene usar POO y cuando no?**
Conviene cuando el dominio tiene entidades con estado y comportamiento que se repiten
o se relacionan (usuarios, cuentas, vehiculos). No conviene forzarla en scripts
pequenios o tareas puramente funcionales/de transformacion de datos, donde anade
complejidad innecesaria.

**¿Que ventaja tiene sobre el codigo "normal"?**
Organiza el codigo en piezas reutilizables y cohesivas, oculta detalles internos
(encapsulacion) y facilita extender el sistema sin reescribir lo existente.

**¿Que problema resuelve la herencia?**
La duplicacion de codigo: permite reutilizar comportamiento comun en una clase base
y especializar solo lo distinto en las subclases.

## Pilares de la POO aplicados

- **Encapsulacion** → `nivel5` (campo privado `#saldo`, solo accesible via metodos).
- **Abstraccion** → cada clase expone una interfaz simple y oculta el detalle interno.
- **Herencia** → `nivel4` (`Perro extends Animal`).
- **Polimorfismo** → `nivel4` (`Perro` redefine `hacerSonido()`).
