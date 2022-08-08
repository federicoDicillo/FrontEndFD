import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { PersonaService } from 'src/app/service/persona.service';
import { Estudio } from 'src/app/model/study.model';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { SEducationService } from 'src/app/service/s-education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  TituloSeccion = "Estudios"


  modEstudio = new Estudio("", "", "", "");
  estudios: Estudio[] = [];


  constructor(private sEducation: SEducationService, private tokenService: TokenService, private router: Router) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEstudios();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEstudios(): void {
    this.sEducation.listar().subscribe(data => { this.estudios = data; })
  }

  addEstudio(estudio: Estudio) {
    this.sEducation.create(estudio).subscribe(data => {
      alert("Estudio añadido.");
      this.cargarEstudios();
      this.addPropiety = true;
    }, err => {
      alert("Falló.");
      this.router.navigate(['']);
    })
  }

  deleteEstudio(id_study?: number) {
    if (id_study != undefined) {
      this.sEducation.delete(id_study).subscribe(data => {
        this.cargarEstudios();
        this.addPropiety = true;
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

