export class Experiencia{
    idExp?:number;
    puesto: String;
    empresa: String;
    tiempo: String;

    constructor(puesto:String, empresa:String, tiempo:String){
        this.puesto = puesto;
        this.empresa = empresa;
        this.tiempo = tiempo;
    }

}