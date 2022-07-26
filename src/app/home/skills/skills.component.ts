import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skills';
import { SSkillsService } from 'src/app/service/s-skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  TituloSeccion = "Hard & Soft skills"


modSkill = new Skill("");
skills: Skill[] = [];


  constructor(private sSkills: SSkillsService,private router:Router, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

cargarSkills():void{
  this.sSkills.listar().subscribe(data => {this.skills = data;})
}

addSkill(skill:Skill){
  this.sSkills.create(skill).subscribe(data => {
    alert("Hablididad añadida.");
    this.cargarSkills();
    this.addPropiety = true;
  }, err => {
    alert("Falló.");
    this.router.navigate(['']);
  })
}

deleteSkill(id?: number){
  if(id != undefined){
    this.sSkills.delete(id).subscribe(data=>{
      this.cargarSkills();
    }, err => {
      alert("Falló.");
    })
  }
}
  editPropiety = true;
  addPropiety = true;
  getAgregar() {
    this.addPropiety = false
  }
  getHabilitarEdit() {
    this.editPropiety = false
  }
  getGuardarCambios() {
    this.editPropiety = true
    this.addPropiety = true
  }

}
