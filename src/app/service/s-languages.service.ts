import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { Idioma } from '../model/idioma';

@Injectable({
  providedIn: 'root'
})
export class SLanguagesService {
  idiomaURL = 'https://portfolio-ap-back.herokuapp.com/#/idiomas/'

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<Idioma[]>{
    return this.httpClient.get<Idioma[]>(this.idiomaURL + 'listar');
  }

  public detail(id: number): Observable<Idioma>{
    return this.httpClient.get<Idioma>(this.idiomaURL + `detail/${id}`);
  }
  
  public create(idioma: Idioma){
    return this.httpClient.post<Idioma>(this.idiomaURL + 'create', idioma);
  }

  public update(id: number, idioma: Idioma): Observable<any>{
    return this.httpClient.put<any>(this.idiomaURL + `update/${id}`, idioma);
  }

  public delete(id: number){
    return this.httpClient.delete<any>(this.idiomaURL + `delete/${id}`);
  }
}
