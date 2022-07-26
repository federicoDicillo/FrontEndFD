import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SSkillsService {
  skillsURL = 'http://localhost:8080/skills/'

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.skillsURL + 'listar');
  }

  public detail(id: number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.skillsURL + `detail/${id}`);
  }
  
  public create(skill: Skill){
    return this.httpClient.post<Skill>(this.skillsURL + 'create', skill);
  }

  public update(id: number, skill: Skill): Observable<any>{
    return this.httpClient.put<any>(this.skillsURL + `update/${id}`, skill);
  }

  public delete(id: number){
    return this.httpClient.delete<any>(this.skillsURL + `delete/${id}`);
  }
}

