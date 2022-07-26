import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/exp.model';

@Injectable({
  providedIn: 'root'
})
export class SExperienceService {
  expURL = 'https://portfolio-ap-back.herokuapp.com/explab/'

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.expURL + 'listar');
  }

  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL + `detail/${id}`);
  }
  
  public create(experiencia: Experiencia){
    return this.httpClient.post<Experiencia>(this.expURL + 'create', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experiencia);
  }

  public delete(id: number){
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}

