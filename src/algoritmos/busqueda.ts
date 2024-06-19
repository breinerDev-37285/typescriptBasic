
const vector = [4, 3, 2, 5, 8, 9 , 3];

export const sequential = (arr: Array<number>, el:number) => {
  let res = -1;

  for (let i = 0; i < arr.length; i++) {
    if ( el === arr[i] ) {
      res = i;
      break;
    }
  }

  return res;
}


const arr = [3,7,11,18,27,30,40];

export const binarySearch = (vector: Array<number>, inicio:number, fin:number, el:number):any => {
  let mita = Math.floor((inicio + fin) / 2);

  if (inicio > fin) return -1;

  if (el === vector[mita]) {
    return mita;
  } else if (el < vector[mita]) {
    return binarySearch(vector, inicio, (mita - 1), el);
  } else {
    return binarySearch(vector, (mita + 1), fin, el);
  }
}

// console.log(binarySearch(arr, 0, arr.length, 39));


export const binarySearchNonRecursive = (vector:Array<number>, el:number):number => {
  let inicio = 0;
  let fin = vector.length - 1;
  let res = -1;
  let mita = 0;

  while( inicio <= fin ) {
    mita = Math.floor((inicio + fin) / 2);

    if ( el === vector[mita]) {
      res = mita;
      break;
    } else if (el < vector[mita]) {
      fin = mita - 1;
    } else {
      inicio = mita + 1;
    }
  }

  return res;
}

console.log(binarySearchNonRecursive(arr, 123))