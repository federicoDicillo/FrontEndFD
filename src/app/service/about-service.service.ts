import { Injectable } from '@angular/core';
import { Sobremi } from '../model/about.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutServiceService {

  constructor(private http: HttpClient) { }
  aboutURL = 'https://portfolio-ap-back.herokuapp.com/sobremi/';


  public listar(): Observable<Sobremi[]>{
    return this.http.get<Sobremi[]>(this.aboutURL + 'listar');
  }

  public detail(id: number): Observable<Sobremi>{
    return this.http.get<Sobremi>(this.aboutURL + `detail/${id}`);
  }
  
  public create(about: Sobremi){
    return this.http.post<Sobremi>(this.aboutURL + 'create', about);
  }

  public update(id: number, about: Sobremi): Observable<any>{
    return this.http.put<any>(this.aboutURL + `update/${id}`, about);
  }

  public delete(id: number){
    return this.http.delete<any>(this.aboutURL + `delete/${id}`);
  }

}
