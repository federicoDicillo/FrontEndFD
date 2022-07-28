import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/exp.model';
import { SExperienceService } from 'src/app/service/s-experience.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {


  editExp: Experiencia = null

  isLogged = false;
  constructor(private tokenService: TokenService, private activatedRouter: ActivatedRoute, private sExp:SExperienceService, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExp.detail(id).subscribe(
      data =>{
        this.editExp = data;
      }, err =>{
        alert("Error al editar perfil");
        this.router.navigate(['']);
      }
    )

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExp.update(id, this.editExp).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al editar perfil");
         this.router.navigate(['']);
      }
    )
  }



}