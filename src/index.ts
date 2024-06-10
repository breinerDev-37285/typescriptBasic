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