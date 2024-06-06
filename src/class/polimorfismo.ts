class Empleado {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    trabajar() {
        console.log(`${this.nombre} está trabajando.`);
    }
}

class Desarrollador extends Empleado {
    trabajar() {
        console.log(`${this.nombre} está escribiendo código.`);
    }
}

class Diseñador extends Empleado {
    trabajar() {
        console.log(`${this.nombre} está diseñando una interfaz.`);
    }
}

let empleados: Empleado[] = [new Desarrollador("Alice"), new Diseñador("Bob")];

for (let empleado of empleados) {
    empleado.trabajar();
}
// Output:
// Alice está escribiendo código.
// Bob está diseñando una interfaz.
