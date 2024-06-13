export class PangramDetector {
    private alphabet: Set<string>;
  
    constructor() {
      this.alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
    }
  
    public isPangram(text: string): boolean {
      const cleanedText = text.toLowerCase().replace(/[^a-z]/g, '');
  
      const textLetters = new Set(cleanedText);
  
      return textLetters.size === this.alphabet.size;
    }
  }