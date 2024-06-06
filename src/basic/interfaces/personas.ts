
export type TGenre = 'male' | 'female' | 'no-binary' | 'others';

export interface Person {
  name: string;
  age: number;
  identification: string;
  birthday: string | number | Date;
  genre: TGenre;
}

export type Keys = keyof Person;

export interface Person2 extends Person{
  state: 'single' | 'married'
}

// En 'types' usamos nociones de conjuntos
export type TPerson = {
  name: string;
  age: number;
  identification: string;
  birthday: string | number | Date;
  genre: TGenre;
}

export type TPerson2 = TPerson & {
  state: 'single' | 'married'
}

// Utilitarios
export type TPersonPartial = Partial<Person>;
export type TPersonReq = Required<Person>;
export type TPersonOmit = Omit<Person, 'name' | 'genre'>;
export type TPersonPick = Pick<Person, 'genre' | 'name' | 'age'>;
export type TPersonNullish = NonNullable<string | number | undefined>;
export type TPersonRecords = Record<Keys, string>;

export type TPersonExclude = Exclude<'a' | 'b' | 'c', 'c' | 'b'>;
export type TPersonExtract = Extract<'a' | 'b' | 'c' , 'b'>;

export type TPersonParameters = Parameters<(s:string, n:number) => void>;
export type TPersonReturn = ReturnType<() => string>;


/**
 * Propiedades que JavaScript toma como nulos o vacíos
 * undefined
 * null
 * 0
 */


//TODO: explicar el por que las interfaces las concidero variables y el type constantes.
