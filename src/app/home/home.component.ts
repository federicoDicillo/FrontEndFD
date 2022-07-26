import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona.model';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  persona = new persona("", "", "", "", "", "", "");
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.cargarPerfil();

  }

  cargarPerfil(): void {
    this.personaService.detail(1).subscribe(data => { this.persona = data });
  }

}
