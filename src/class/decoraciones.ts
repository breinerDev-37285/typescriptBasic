function log(constructor: Function) {
    console.log(`Clase creada: ${constructor.name}`);
}

@log
class Usuario {
    constructor(public nombre: string) {}
}

let usuario1 = new Usuario("Carlos"); // Output: Clase creada: Usuario
