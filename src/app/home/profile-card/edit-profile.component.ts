import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  editPersona: persona = null

  isLogged = false;
  constructor(private tokenService: TokenService, private activatedRouter: ActivatedRoute, private sPersona: PersonaService, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(
      data =>{
        this.editPersona = data;
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
    this.sPersona.update(id, this.editPersona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al editar perfil");
         this.router.navigate(['']);
      }
    )
  }



}
