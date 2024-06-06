class Persona {
    nombre: string;
    apellido?: string;
    edad: number;
  
    // Sobrecarga de constructores
    constructor(nombre: string, edad: number);
    constructor(nombre: string, apellido: string, edad: number);
    constructor(persona: Persona);
    constructor(arg1: string | Persona, arg2?: string | number, arg3?: number) {
      if (typeof arg1 === 'string' && typeof arg2 === 'number' && arg3 === undefined) {
        // Constructor: Persona(nombre, edad)
        this.nombre = arg1;
        this.edad = arg2;
      } else if (typeof arg1 === 'string' && typeof arg2 === 'string' && typeof arg3 === 'number') {
        // Constructor: Persona(nombre, apellido, edad)
        this.nombre = arg1;
        this.apellido = arg2;
        this.edad = arg3;
      } else if (arg1 instanceof Persona) {
        // Constructor: Persona(persona)
        this.nombre = arg1.nombre;
        this.apellido = arg1.apellido;
        this.edad = arg1.edad;
      } else {
        throw new Error('Invalid constructor arguments');
      }
    }
  
    getInfo(): string {
      return `Nombre: ${this.nombre} ${this.apellido || ''}, Edad: ${this.edad}`;
    }
  }


  const persona1 = new Persona('Juan', 30);
console.log(persona1.getInfo()); // Nombre: Juan , Edad: 30

// Uso del constructor Persona(nombre, apellido, edad)
const persona2 = new Persona('Juan', 'Pérez', 30);
console.log(persona2.getInfo()); // Nombre: Juan Pérez, Edad: 30

// Uso del constructor Persona(persona)
const persona3 = new Persona(persona2);
console.log(persona3.getInfo()); // Nombre: Juan Pérez, Edad: 30