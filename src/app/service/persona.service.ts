import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
 

  constructor(private http: HttpClient) { }

  URL = 'https://portfolio-ap-back.herokuapp.com/personas/';

  public listar(): Observable<persona[]>{
    return this.http.get<persona[]>(this.URL + 'listar');
  }

  public detail(id: number): Observable<persona>{
    return this.http.get<persona>(this.URL + `detail/${id}`);
  }
  
  public create(person: persona){
    return this.http.post<persona>(this.URL + 'create', person);
  }

  public update(id: number, person: persona): Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`, person);
  }

  public delete(id: number){
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }


 
}

