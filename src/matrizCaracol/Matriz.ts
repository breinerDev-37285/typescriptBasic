export class Matriz {

    private dimention: number;
    private positionsX: number[] = new Array;
    private positionsY: number[] = new Array;
    matrix: number[][] = new Array;

    constructor(dimention: number) {
        this.dimention = dimention;
        this.matrix = new Array(dimention).fill(0).map(()=>new Array(dimention).fill(0))
        this.fillPositions();
        this.fillMatrix();

    }

    private calculateXPositionsExternLayer(dimentionLayer: number): number[] {
        let xPositionsExternLayer: number[] = new Array((dimentionLayer-1) ** 2);
        let index = 0;
        if (dimentionLayer === 1) {
            xPositionsExternLayer[0] = (this.dimention - 1) / 2;
        }

        let matrixStartPosition = (this.dimention - dimentionLayer) / 2;

        if (dimentionLayer === 2) {
            xPositionsExternLayer[index] = matrixStartPosition;
            xPositionsExternLayer[index+1] = matrixStartPosition;
            xPositionsExternLayer[index+2] = matrixStartPosition+1;
            xPositionsExternLayer[index+3] = matrixStartPosition+1;
            return xPositionsExternLayer;
        }

        for (let i = 0; i < dimentionLayer-1; i++) {
            xPositionsExternLayer[index] = matrixStartPosition;
            index++;
        }

        for (let i = 0; i < dimentionLayer-1; i++) {
            xPositionsExternLayer[index] = matrixStartPosition;
            index++;
            matrixStartPosition++;
        }


        for (let i = 0; i < dimentionLayer-1; i++) {
            xPositionsExternLayer[index] = matrixStartPosition;
            index++;
        }

        for (let i = 0; i < dimentionLayer-1; i++) {
            xPositionsExternLayer[index] = matrixStartPosition;
            index++;       
            matrixStartPosition--; 
        }

        //console.log(xPositionsExternLayer);

        return xPositionsExternLayer;
    }
    private calculateYPositionsExternLayer(dimentionLayer: number): number[] {
        let yPositionsExternLayer: number[] = new Array((dimentionLayer-1) ** 2);
        let index = 0;
        if (dimentionLayer === 1) {
            yPositionsExternLayer[index] = (this.dimention - 1) / 2;
            //console.log(yPositionsExternLayer);
            return yPositionsExternLayer;
        }

        let matrixStartPosition = (this.dimention - dimentionLayer) / 2;

        if (dimentionLayer === 2) {
            yPositionsExternLayer[index] = matrixStartPosition;
            yPositionsExternLayer[index+1] = matrixStartPosition+1;
            yPositionsExternLayer[index+2] = matrixStartPosition+1;
            yPositionsExternLayer[index+3] = matrixStartPosition;
            //console.log(yPositionsExternLayer);
            return yPositionsExternLayer;
        }


        for (let i = 0; i < dimentionLayer-1; i++) {
            yPositionsExternLayer[index] = matrixStartPosition;
            index++;
            matrixStartPosition++;
        }

        for (let i = 0; i < dimentionLayer-1; i++) {
            yPositionsExternLayer[index] = matrixStartPosition;
            index++;
        }

        for (let i = 0; i < dimentionLayer-1; i++) {
            yPositionsExternLayer[index] = matrixStartPosition;
            index++;
            matrixStartPosition--;
        }


        for (let i = 0; i < dimentionLayer-1; i++) {
            yPositionsExternLayer[index] = matrixStartPosition;
            index++;        
        }

        //console.log(yPositionsExternLayer);
        return yPositionsExternLayer;

    }


    
    private fillPositions() {
        for (let i = this.dimention; i > 0; i-=2){
            let tmpXPositions:number[] = this.calculateXPositionsExternLayer(i);
            tmpXPositions.forEach(element => {
                this.positionsX.push(element);
            });
        }

        for (let i = this.dimention; i > 0; i-=2){
            let tmpYPositions:number[] = this.calculateYPositionsExternLayer(i);
            tmpYPositions.forEach(element => {
                this.positionsY.push(element);
            });
        }
        //console.log(this.positionsX);
        //console.log(this.positionsY);

    }

    private fillMatrix() {
        let contador:number = 1;

        for(let i = 0; i<this.dimention**2;i++){
            this.matrix[this.positionsX[i]][this.positionsY[i]] = contador;
            contador++;
        }

        console.log(this.matrix);

    }

}