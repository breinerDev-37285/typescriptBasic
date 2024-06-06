
/**
 * Encamsulamiento
 *modificadores de acceso (public, private, protected) para controlar 
 la visibilidad de las propiedades y métodos de una clase.
 
 */
class CuentaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    depositar(cantidad: number) {
        this.saldo += cantidad;
    }

    retirar(cantidad: number) {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
        } else {
            console.log("Saldo insuficiente");
        }
    }

    consultarSaldo() {
        console.log(`El saldo actual es ${this.saldo}`);
    }
}

let cuenta = new CuentaBancaria(1000);
cuenta.depositar(500);
cuenta.retirar(300);
cuenta.consultarSaldo();