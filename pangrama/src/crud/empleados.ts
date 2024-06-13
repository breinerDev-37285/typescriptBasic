import * as readline from 'readline'; 

export class Empleados {

    id: number;
    nombre: string;
    edad: number;

    constructor(id: number, nombre: string, edad: number) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
      }

}