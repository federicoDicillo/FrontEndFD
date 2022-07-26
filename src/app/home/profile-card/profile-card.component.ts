import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {


  persona = new persona("","","","","","","");
  isLogged = false;
  constructor(public tokenService:TokenService, public personaService: PersonaService) { }

  ngOnInit(): void {
   this.cargarPerfil();

   
   if (this.tokenService.getToken()) {
    this.isLogged = true;
  } else {
    this.isLogged = false;
  }

  }
  cargarPerfil(): void {
    this.personaService.detail(1).subscribe(data => { this.persona = data });
  }


}
