import { MyCustomError } from "@base/errors";


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