import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sobremi } from 'src/app/model/about.model';
import { AboutServiceService } from 'src/app/service/about-service.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edit-aboutme',
  templateUrl: './edit-aboutme.component.html',
  styleUrls: ['./edit-aboutme.component.css']
})
export class EditAboutmeComponent implements OnInit {

  newAboutme: Sobremi = null;


  isLogged = false;
  constructor(private tokenService:TokenService, private sAbout: AboutServiceService, private router:Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sAbout.detail(id).subscribe(
      data =>{
        this.newAboutme = data;
      }, err =>{
        alert("Error al modificar 'Acerca de'");
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
    this.sAbout.update(id, this.newAboutme).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar 'Acerca de'");
         this.router.navigate(['']);
      }
    )
  }


}
