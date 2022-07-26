import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyect.model';

@Injectable({
  providedIn: 'root'
})
export class SProyectsService {
  proyURL = 'https://portfolio-ap-back.herokuapp.com/#/proyectos/'

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.proyURL + 'listar');
  }

  public detail(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.proyURL + `detail/${id}`);
  }
  
  public create(proyecto: Proyecto){
    return this.httpClient.post<Proyecto>(this.proyURL + 'create', proyecto);
  }

  public update(id: number, proyecto: Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.proyURL + `update/${id}`, proyecto);
  }

  public delete(id: number){
    return this.httpClient.delete<any>(this.proyURL + `delete/${id}`);
  }
}
