import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyect.model';
import { SProyectsService } from 'src/app/service/s-proyects.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edit-proyects',
  templateUrl: './edit-proyects.component.html',
  styleUrls: ['./edit-proyects.component.css']
})
export class EditProyectsComponent implements OnInit {

  editProy: Proyecto = null

  isLogged = false;
  constructor(private tokenService: TokenService, private activatedRouter: ActivatedRoute, private sProy:SProyectsService, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProy.detail(id).subscribe(
      data =>{
        this.editProy = data;
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
    this.sProy.update(id, this.editProy).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al editar proyecto");
         this.router.navigate(['']);
      }
    )
  }



}
