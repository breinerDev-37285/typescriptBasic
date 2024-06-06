export default class Animal {
  x: number;
  y: number;

  constructor(x:number, y: number);
  constructor(z:string);
  constructor(x:number);
  constructor(x:number | string, y = 4) {  // Lo importante es el orden
    if (typeof x === "string") {
      // aplicamos nuestra lógica
      this.x = -1;
      this.y = -1;
    } else {
      this.x = x;
      this.y = y;
    }
  }
}


export const test = () => {
  const animal = new Animal('test');
  const animal1 = new Animal(1);
  const animal2 = new Animal(2,5);

  console.log({
    animal,
    animal1,
    animal2
  })
}

