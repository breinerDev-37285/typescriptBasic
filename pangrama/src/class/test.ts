import { PangramDetector } from "./pandagrama"

export class PangramTest {

    private destector : PangramDetector;
    
    constructor(){
        this.destector = new PangramDetector();
    }


    // public testPangram(text : string) : void{
    //     const isPangram = this.destector.isPangram(text);
    //     console.log(`"${text}" ${isPangram ? 'es' : 'no es'} un pangrama.`);
    // }
    

    public testPangram(text: string): void {
        const isPangram = this.destector.isPangram(text);
        if (isPangram) {
            console.log(`"${text}" es un pangrama.`);
        } else {
            console.log(`"${text}" no es un pangrama.`);
        }
    }
    

    public testMutiPangrama( texts: string[]): void{
        texts.forEach((text, index ) => {
            console.log(`Texto ${index + 1}:`);
            this.testPangram(text);
        } )
    }
}
