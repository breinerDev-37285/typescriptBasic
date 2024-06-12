import { Matrizcaracol } from './class/caracol';
import { PangramDetector } from './class/pandagrama';
import { PangramTest } from './class/test';
import { GestorEmpleados } from './crud/empresa';
import * as readline from 'readline'; 

// const d = new PangramTest();

// const frase1 = "Bienvenidos a este curso de programacion orientado a objetios";

// d.testPangram(frase1);

// const phrases = [
//     "El veloz murciélago hindú comía feliz cardillo y kiwi.",
//     "Jovencillo emponzoñado de whisky, ¡qué figurota exhibe",
//     "La cigüeña tocaba cada vez mejor el saxofón y el búho pedía kiwi.",
//     "El viejo señor Gómez pedía queso, kiwi y habas, pero le tocó un saxofón.",
//     "Exquisito kiwi, piña y fugaz jamón de codorniz, brindis y chachachá.",
//     "La cigüeña vulgar zapea a dúo, quita huevos fijos y blanquea jamón."
// ];

// d.testMutiPangrama(phrases);

// const gestor = new GestorEmpleados();

// function mostrarMenu() {
//   console.log('-------- Menú --------');
//   console.log('1. Registrar empleado');
//   console.log('2. Mostrar empleados');
//   console.log('3. Actualizar empleado');
//   console.log('4. Eliminar empleado');
//   console.log('5. Salir');
//   rl.question('Ingrese una opción: ', (opcion) => {
//     procesarOpcion(opcion);
//   });
// }

// function procesarOpcion(opcion: string) {
//   switch (opcion) {
//     case '1':
//       gestor.agregarEmpleado(() => mostrarMenu());
//       break;
//     case '2':
//       gestor.mostrarEmpleados();
//       mostrarMenu();
//       break;
//     case '3':
//       gestor.actualizarEmpleado(() => mostrarMenu());
//       break;
//     case '4':
//       gestor.eliminarEmpleado(() => mostrarMenu());
//       break;
//     case '5':
//       rl.close();
//       break;
//     default:
//       console.log('Opción inválida');
//       mostrarMenu();
//   }
// }

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});

// mostrarMenu();

function obtenerDimensiones(): Promise<{ filas: number; columnas: number }> {
  return new Promise((resolve) => {
    rl.question('Ingrese el número de filas: ', (filas) => {
      rl.question('Ingrese el número de columnas: ', (columnas) => {
        resolve({ filas: parseInt(filas), columnas: parseInt(columnas) });
      });
    });
  });
}

async function main() {
  const { filas, columnas } = await obtenerDimensiones();
  const matrizCaracol = new Matrizcaracol(filas, columnas);
  const matriz = matrizCaracol.getMatriz();

  console.log('Matriz caracol:');
  for (const fila of matriz) {
    console.log(fila.join(' '));
  }

  rl.close();
}

main();
