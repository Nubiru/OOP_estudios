// Nivel 5 (desafio): Crear una clase CuentaBancaria con un saldo y los metodos
//                    depositar(), retirar() y verSaldo().
//
// Aplicamos ENCAPSULACION con un campo privado (#saldo): nadie puede modificar
// el saldo directamente desde fuera, solo a traves de los metodos, que validan
// las operaciones.

class CuentaBancaria {
    #saldo;

    constructor(saldoInicial = 0) {
        this.#saldo = saldoInicial;
    }

    depositar(monto) {
        if (monto <= 0) {
            console.log("El monto a depositar debe ser positivo.");
            return;
        }
        this.#saldo += monto;
        console.log(`Deposito de $${monto}. Saldo actual: $${this.#saldo}`);
    }

    retirar(monto) {
        if (monto <= 0) {
            console.log("El monto a retirar debe ser positivo.");
            return;
        }
        if (monto > this.#saldo) {
            console.log(`Fondos insuficientes. Saldo disponible: $${this.#saldo}`);
            return;
        }
        this.#saldo -= monto;
        console.log(`Retiro de $${monto}. Saldo actual: $${this.#saldo}`);
    }

    verSaldo() {
        return this.#saldo;
    }
}

const cuenta = new CuentaBancaria(100);
console.log("Saldo inicial:", cuenta.verSaldo());

cuenta.depositar(50);
cuenta.retirar(30);
cuenta.retirar(500); // intento invalido: fondos insuficientes

console.log("Saldo final:", cuenta.verSaldo());

// El saldo no se puede tocar directamente (campo privado):
// cuenta.#saldo  ->  SyntaxError. Solo los metodos lo gestionan.
