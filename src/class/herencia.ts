

/**
 * La herencia permite que una clase hija herede propiedades y métodos de otra clase (clase padre).
 * 
 * 
 */
class Animal {
    protected nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}

class Perro extends Animal {
    constructor(nombre: string) {
        super(nombre); // Llama al constructor de la clase padre
    }

    hacerSonido() {
        console.log(`${this.nombre} ladra.`);
    }
}

let miPerro = new Perro("Fido");
miPerro.hacerSonido(); // Output: Fido ladra.
