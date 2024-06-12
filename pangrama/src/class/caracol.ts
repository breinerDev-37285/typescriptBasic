export class Matrizcaracol {
    private matriz: number[][];
    private fila: number;
    private columnas: number;

    constructor(fila: number, columnas: number) {
        this.fila = fila;
        this.columnas = columnas;
        this.matriz = this.inicializarMatriz();
        this.llenarMatriz();
    }

    private inicializarMatriz(): number[][] {
        const matriz: number[][] = [];
        for (let i = 0; i < this.fila; i++) {
            matriz[i] = new Array(this.columnas).fill(0);
        }
        return matriz;
    }

    private llenarMatriz(): void {
        let valor = 1;
        let fila = 0;
        let columna = 0;
        let direccion = 0; 

        // Definición de límites iniciales
        let limiteDerecha = this.columnas - 1;
        let limiteAbajo = this.fila - 1;
        let limiteIzquierda = 0;
        let limiteArriba = 1;

        while (valor <= this.fila * this.columnas) {
            this.matriz[fila][columna] = valor++;

            if (direccion === 0) { // Moviendo hacia la derecha
                if (columna < limiteDerecha) {
                    columna++;
                } else {
                    direccion = 1;
                    limiteDerecha--;
                    fila++;
                }
            } else if (direccion === 1) { // Moviendo hacia abajo
                if (fila < limiteAbajo) {
                    fila++;
                } else {
                    direccion = 2;
                    limiteAbajo--;
                    columna--;
                }
            } else if (direccion === 2) { // Moviendo hacia la izquierda
                if (columna > limiteIzquierda) {
                    columna--;
                } else {
                    direccion = 3;
                    limiteIzquierda++;
                    fila--;
                }
            } else if (direccion === 3) { // Moviendo hacia arriba
                if (fila > limiteArriba) {
                    fila--;
                } else {
                    direccion = 0;
                    limiteArriba++;
                    columna++;
                }
            }
        }
    }

    public getMatriz(): number[][] {
        return this.matriz;
    }
}