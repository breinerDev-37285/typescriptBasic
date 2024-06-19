import { bubble, Quicksort } from '@algoritmos/ordenamiento'


// serializar => JSON.stringify
// deserializar => JSON.parse

const arr = [11, 4, 6, 2, 16, 5 ,9, 4];

const telefonos = [{
  precio: 200,
  nombre: 'alcatel x',
  destacado: true
}, {
  nombre: 'nokia 1100',
  precio: 25
}]

// console.log(Quicksort(arr, 0, arr.length -1));

const s = JSON.stringify(telefonos);
const d = JSON.parse(s);
console.log(d)

