export class Estudio {
    idStudy?: number;
    titulo: String;
    escuela: String;
    tiempo: String;
    nivel: String;
    localidad: String

    constructor(titulo:String, escuela:String, tiempo:String, nivel:String, localidad: String){
        this.localidad = localidad;
        this.titulo = titulo;
        this.escuela = escuela;
        this.tiempo = tiempo;
        this.nivel = nivel;
    }
}