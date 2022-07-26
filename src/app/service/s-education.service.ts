import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../model/study.model';

@Injectable({
  providedIn: 'root'
})
export class SEducationService {
  studyURL = 'https://portfolio-ap-back.herokuapp.com/estudios/'

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<Estudio[]>{
    return this.httpClient.get<Estudio[]>(this.studyURL + 'listar');
  }

  public detail(id: number): Observable<Estudio>{
    return this.httpClient.get<Estudio>(this.studyURL + `detail/${id}`);
  }
  
  public create(estudio: Estudio){
    return this.httpClient.post<Estudio>(this.studyURL + 'create', estudio);
  }

  public update(id: number, estudio: Estudio): Observable<any>{
    return this.httpClient.put<any>(this.studyURL + `update/${id}`, estudio);
  }

  public delete(id: number){
    return this.httpClient.delete<any>(this.studyURL + `delete/${id}`);
  }
}

