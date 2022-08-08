import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/exp.model';
import { SExperienceService } from 'src/app/service/s-experience.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  TituloSeccion = "Experiencia"


  modExp = new Experiencia("", "", "");
  experiencias: Experiencia[] = [];

  constructor(private sExp: SExperienceService, private tokenService: TokenService, private router: Router) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExpe();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExpe(): void {
    this.sExp.listar().subscribe(data => { this.experiencias = data });
  }

  addExp(experiencia: Experiencia) {
    this.sExp.create(experiencia).subscribe(data => {
      alert("Agregado Exitosamente!");
      this.cargarExpe();
      this.addPropiety = true;
    }, err => {
      alert("Falló.");
      this.router.navigate(['']);
    })
  }

  deleteExp(idExp?: number) {
    if (idExp != undefined) {
      this.sExp.delete(idExp).subscribe(data => {
        this.cargarExpe();
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

