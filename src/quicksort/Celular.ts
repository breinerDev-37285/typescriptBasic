export class Celular {
    model: string;
    price: number;
    destacado: boolean;

    constructor(model: string, price: number, destacado: boolean) {
        this.model = model;
        this.price = price;
        this.destacado = destacado;
    }
}
