export const bubble = (arr:Array<number>) => {
  
  let aux = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if ( arr[i] < arr[j] ) {
        aux = arr[i];
        arr[i] = arr[j];
        arr[j] = aux;
      }
    }
  }

  return arr;
}

// divide y vencerás
export const Quicksort = (vector:Array<number>, i:number, j:number):any => {
  let pivote = vector[i];
  let inicio = i;
  let fin = j;
  let aux = 0;

  while( i < j ) {
      while ( vector[i] <= pivote && i < j ) {
        i++;
      }

      while ( vector[j] > pivote ) {
        j--;
      }

      if (i < j) {
        aux = vector[i];
        vector[i] = vector[j];
        vector[j] = aux;
      }
  }

  vector[inicio] = vector[j];
  vector[j] = pivote;

  if ( inicio < (j-1) ) {
    return Quicksort(vector, inicio, (j-1));
  }

  if ((j+1) < fin) {
    return Quicksort(vector, (j+1), fin);
  }

  return vector;
}
