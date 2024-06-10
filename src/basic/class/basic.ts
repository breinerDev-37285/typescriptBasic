/**
 * Definición de estructuras mediante una interface
 */

interface IGato {
  x:number;
  y:number;
  sum(a:number,b:number):number;
}

class Gato implements IGato {
  x: number;
  y: number;

  constructor() {
    this.x = 4;
    this.y = 5;
  }

  sum(a : number,b: number): number {
    return a + b;
  }
}

/**
 * Definición de estructuras mediante una clase abstracta
 */

abstract class CGato {
  abstract x: number;
  abstract y: number;
  protected z: number; // esto no se debería hacer

  constructor(z: number) {
    this.z = z;  // esto no se debería hacer
  }
  
  abstract sum(a:number,b:number): number;
}

class Gato1 extends CGato {
  x: number;
  y: number;

  constructor() {
    super(6);
    this.x = 0;
    this.y = 3;
  }

  sum(a: number, b: number): number {
    throw new Error("Method not implemented.");
  }
  
}

/**
 * Modificadores de acceso
 * por defecto son publicos.
 * 
 * public  // acceso desde cualquier clase
 * private // solo es posible acceder a estas propiedades en la misma clase
 * protected // se puede acceder desde la misma clase y clases heredadas
 * 
 * #variable - private mas estricto
 */

export class Perro {
  public x:number = 3;
  private y:number = 5;
  #z: number = 8;
  protected u: number = 3;

  get getY() {
    return this.y;
  }

  set setY(y:number) {
    this.y = y;
  }
}

const p = new Perro();
p.setY = 3;
p.getY;


/**
 * Contexto de la propiedad this
 */

export class Perro1 {
  private name:string;

  constructor() {
    this.name = 'Kiara';

    this.getName = this.getName.bind(this);
  }

  getName() {
    return this.name;
  }
}


export class Animal {
  protected color: string;

  constructor(color:string) {
    this.color = color;
  }

}

export class Perro2 extends Animal {

  constructor(color:string) {
    super(color);
  }

  eat(){
    console.log(this.color);
  }

  test1(){
    console.log('hola')
  }
  test2(){}

}

export class Gato2 extends Animal {
  constructor(color:string) {
    super(color);
  }

  
}


/**
 * Patrón Singleton
 */

export class Database {

  static instance:Database;

  private constructor() {
    // logica para iniciar la base
  } 

  static init() {
    if ( !this.instance ) {
      this.instance = new Database();
    }

    return this.instance;
  }
}