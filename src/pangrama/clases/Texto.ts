import {InterfaceTexto} from "pangrama/interfaces/InterfaceTexto"

export class Texto implements InterfaceTexto {
    contenido: string;
    esPangrama?: boolean;

    constructor(texto:string){
        this.contenido = texto;
        try{
            if(this.contenido === "" || this.contenido === null){
                throw Error;
            }
            this.esPangrama = this.VerificarEsPangrama();
        } catch{
            this.esPangrama = undefined;
            console.log("No se ingresó texto")
        }

    }

    private VerificarEsPangrama(): boolean {
        let texto:string = this.limpiarTexto();
        let esPangrama:boolean;
        const alfabeto = new Set<string>('eaosrnidlctumpbgvyqohfzjxkw'.split('')); //No incluye la ñ, mejorado
        //const alfabeto = new Set<string>('abcdefghijklmnopqrstuvwxyz'.split('')); //No incluye la ñ
        //const alfabeto = new Set<string>('aeioubcdfghjklmnpqrstvwxyz'.split('')); 
        for(const letra of alfabeto){
            texto = texto.replace(new RegExp(letra, 'gi'), '');
            console.log(texto);
        }
        if(!this.contenido.includes('ñ')){
            return false;
        }
        esPangrama = texto.length === 0;
        return esPangrama;
    }

    private limpiarTexto(): string {
        let texto: string = this.contenido;
        texto = texto.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
        texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // No incluye la ñ
        texto = texto.replace(/\s+/g, '');
        return texto;
    }
    

}