interface IOpt {
  code: number;
  message: string;
  data?: Record<keyof IOpt, any>;
}


abstract class MyAbstractCustomError extends Error implements IOpt {
  abstract code: number;
  abstract message: string;
  abstract data: Record<keyof IOpt, string>;
  
  constructor(message:string) {
    super(message);
  }
}


export class MyCustomError extends MyAbstractCustomError {
  code: number;
  message: string;
  data: Record<keyof IOpt, any>;
  

  constructor(message:string, opt: Record<keyof IOpt, any>);
  constructor(message:string);
  constructor(message:string, opt: Record<keyof IOpt, any> = {
    code: 500,
    message: 'Internal Server Error',
    data: null
  }) {
    super(message);

    this.code = 500;
    this.message = message;
    this.data = opt;
  }
}

