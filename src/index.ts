import {Celular} from "quicksort/Celular"

function quicksortLetters(arr: string[]): string[] {
  if (arr.length <= 1) {
      return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left: string[] = [];
  const right: string[] = [];

  for (let i = 0; i < arr.length; i++) {
      if (i === Math.floor(arr.length / 2)) continue; // Skip the pivot element

      if (arr[i] < pivot) {
          left.push(arr[i]);
      } else {
          right.push(arr[i]);
      }
  }

  return [...quicksortLetters(left), pivot, ...quicksortLetters(right)];
}

const letters = ['d', 'a', 'c', 'b', 'e'];
const sortedLetters = quicksortLetters(letters);
console.log(sortedLetters); 


function quicksortCellphones(arr: Celular[]): Celular[] {
  if (arr.length <= 1) {
      return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left: Celular[] = [];
  const right: Celular[] = [];

  for (let i = 0; i < arr.length; i++) {
      if (i === Math.floor(arr.length / 2)) continue; // Skip the pivot element

      if (arr[i].price < pivot.price) {
          left.push(arr[i]);
      } else {
          right.push(arr[i]);
      }
  }

  return [...quicksortCellphones(left), pivot, ...quicksortCellphones(right)];
}


const celulares: Celular[] = [
  new Celular('Model A', 200, false),
  new Celular('Model B', 300, true),
  new Celular('Model C', 100, false),
  new Celular('Model D', 400, true),
];

const sortedCelulares = quicksortCellphones(celulares);
console.log(sortedCelulares);


/*
import { Matriz } from "./matrizCaracol/Matriz";


let matrizX4:Matriz = new Matriz(4)
let matrizX5:Matriz = new Matriz(5)
let matrizX6:Matriz = new Matriz(6)

/*
import {Texto} from "@pangrama/index";

let texto:Texto = new Texto("El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja");
console.log(texto.esPangrama);



/*import { MyCustomError } from "@base/errors";


const TestError = () => {
  try {
    // aplicar cualquier logica

    throw new MyCustomError('Error Personalizado', {
      code: 500,
      message: 'Error Personalizado',
      data: {

      }
    });

  } catch (error: unknown) {
    //capturar el errror
    console.log({error})
  } finally {
    // opcional, se ejecuta sin importar sin hay error
    console.log('Se ejecuta el finally')
  }
}



TestError();
*/