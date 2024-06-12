import * as readline from 'readline';
import { Empleados } from './empleados';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export class GestorEmpleados {
    private empleados: Empleados[] = [];
    private ultimoId: number = 0;

    agregarEmpleado(callback: () => void): void {
        rl.question('Ingrese el nombre del empleado: ', (nombre) => {
            rl.question('Ingrese la edad del empleado: ', (edad) => {
                const nuevoEmpleado = new Empleados(++this.ultimoId, nombre, parseInt(edad));
                this.empleados.push(nuevoEmpleado);
                console.log('Empleado registrado correctamente');
                callback();
            });
        });
    }

    mostrarEmpleados(): void {
        if (this.empleados.length === 0) {
            console.log('No hay empleados registrados');
        } else {
            console.log('-------- Empleados --------');
            this.empleados.forEach((empleado) => {
                console.log(`ID: ${empleado.id}, Nombre: ${empleado.nombre}, Edad: ${empleado.edad}`);
            });
        }
    }

    actualizarEmpleado(callback: () => void): void {
        rl.question('Ingrese el ID del empleado a actualizar: ', (id) => {
            const empleadoIndex = this.empleados.findIndex((empleado) => empleado.id === parseInt(id));
            if (empleadoIndex === -1) {
                console.log('Empleado no encontrado');
                callback();
            } else {
                rl.question('Ingrese el nuevo nombre del empleado: ', (nombre) => {
                    rl.question('Ingrese la nueva edad del empleado: ', (edad) => {
                        this.empleados[empleadoIndex].nombre = nombre;
                        this.empleados[empleadoIndex].edad = parseInt(edad);
                        console.log("Actualización correcta");
                        callback();
                    });
                });
            }
        });
    }

    eliminarEmpleado(callback: () => void): void {
        rl.question('Ingrese el ID del empleado a eliminar: ', (id) => {
            const empleadoIndex = this.empleados.findIndex((empleado) => empleado.id === parseInt(id));
            if (empleadoIndex === -1) {
                console.log('Empleado no encontrado');
            } else {
                this.empleados.splice(empleadoIndex, 1);
                console.log('Empleado eliminado correctamente');
            }
            callback();
        });
    }
}
