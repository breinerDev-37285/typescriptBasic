// TODO: Sobrecarga de constructores en Javascript Consulta.

export default class Animal {
  private typeAnimal: string = '';

  constructor(typeAnimal: string) {
    this.typeAnimal = typeAnimal;
  }


}

class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number);
  constructor(edad: number);

  constructor(nombreOrEdad: string | number, edad?: number) {
    if (typeof nombreOrEdad === 'string') {
      this.nombre = nombreOrEdad;
      this.edad = edad!;
    } else {
      this.nombre = 'Anónimo';
      this.edad = nombreOrEdad;
    }
  }
}

const p = new Persona(3);
const pd = new Persona('', 4);
