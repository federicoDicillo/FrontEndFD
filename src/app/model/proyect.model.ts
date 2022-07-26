export class Proyecto{
    idProy?: number;
    nameProy: String;
    detailsProy: String;


    constructor (nombre_proy:String, detalles_proy:String){
        this.detailsProy = detalles_proy;
        this.nameProy = nombre_proy;
    }
}