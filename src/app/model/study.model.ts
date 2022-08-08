export class Estudio {
    idStudy?: number;
    titulo: String;
    escuela: String;
    tiempo: String;
    nivel: String;

    constructor(titulo:String, escuela:String, tiempo:String, nivel:String){
        this.titulo = titulo;
        this.escuela = escuela;
        this.tiempo = tiempo;
        this.nivel = nivel;
    }
}