export class Idioma {
    id?: number;
    idioma: string;
    nivelI: string;

    constructor(idioma: string, nivelI:string){
        this.idioma = idioma;
        this.nivelI = nivelI;
    }
}
