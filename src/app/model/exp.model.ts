export class Experiencia{
    idExp?:number;
    puesto: String;
    empresa: String;
    tiempo: String;
    contacto: String;

    constructor(puesto:String, empresa:String, tiempo:String, contacto: String){
        this.puesto = puesto;
        this.empresa = empresa;
        this.tiempo = tiempo;
        this.contacto = contacto;
    }

}