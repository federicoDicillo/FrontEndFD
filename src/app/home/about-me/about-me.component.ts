import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Sobremi } from 'src/app/model/about.model';
import { AboutServiceService } from 'src/app/service/about-service.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  sobremi = new Sobremi("");

  isLogged = false;
  constructor(public sAbout: AboutServiceService, private router: Router, private tokenService: TokenService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarSobremi();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

 
  }

  cargarSobremi(): void {
    this.sAbout.detail(1).subscribe(data => { this.sobremi = data });
  }

  


}
