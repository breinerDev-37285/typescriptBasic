/*
// module.ts
export function sayHello() {
  console.log('Hello from TypeScript!');
}

// main.ts
System.import('./module').then((module: { sayHello: () => void }) => {
  module.sayHello();
});

// module.ts
export function sayHello() {
  console.log('Hello from TypeScript!');
}

// main.ts
System.import('./module').then((module: { sayHello: () => void }) => {
  module.sayHello();
});



CommonJS
{
  "compilerOptions": {
    "module": "CommonJS",
    "target": "ES6"
  }
}

// module.ts
export function sayHello() {
  console.log('Hello from TypeScript!');
}

// main.ts
const { sayHello } = require('./module');

sayHello();


*****************************************

AMD
{
  "compilerOptions": {
    "module": "AMD",
    "target": "ES6"
  }
}

// module.ts
export function sayHello() {
    console.log('Hello from TypeScript!');
  }
  
  // main.ts
  require(['./module'], function(module: { sayHello: () => void }) {
    module.sayHello();
  });*/
  
  class Person {
    name: string;
    age: number;
    email: string;
  
    // Sobrecargas de constructores
    constructor();
    constructor(name: string);
    constructor(name: string, age: number);
    constructor(name: string, age: number, email: string);
  
    // Implementación del constructor
    constructor(name?: string, age?: number, email?: string) {
      if (name !== undefined) {
        this.name = name;
      } else {
        this.name = 'Unknown';
      }
  
      if (age !== undefined) {
        this.age = age;
      } else {
        this.age = 0;
      }
  
      if (email !== undefined) {
        this.email = email;
      } else {
        this.email = 'unknown@example.com';
      }
    }
  }
  
  let person1 = new Person();
  let person2 = new Person('Alice');
  let person3 = new Person('Bob', 25);
  let person4 = new Person('Charlie', 30, 'charlie@example.com');
  
  console.log(person1);
  console.log(person2);
  console.log(person3);
  console.log(person4);
  