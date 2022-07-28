import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from 'src/app/model/study.model';
import { SEducationService } from 'src/app/service/s-education.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {


  editStudy: Estudio = null

  isLogged = false;
  constructor(private tokenService: TokenService, private activatedRouter: ActivatedRoute, private sEdu:SEducationService, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEdu.detail(id).subscribe(
      data =>{
        this.editStudy = data;
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
    this.sEdu.update(id, this.editStudy).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al editar perfil");
         this.router.navigate(['']);
      }
    )
  }



}