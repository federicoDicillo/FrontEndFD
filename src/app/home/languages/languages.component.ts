import { Component, OnInit } from '@angular/core';
import { Idioma } from 'src/app/model/idioma';
import { SLanguagesService } from 'src/app/service/s-languages.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  TituloSeccion="Idiomas"

  idiomas: Idioma[] = [];
  modIdioma = new Idioma("","");

  constructor(private sLanguage: SLanguagesService, private tokenService: TokenService, private router: Router) { }


  isLogged = false;

  ngOnInit(): void {
    this.cargarIdiomas();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarIdiomas():void{
    this.sLanguage.listar().subscribe(data=>{this.idiomas = data;})
  }

  addIdioma(idioma:Idioma){
    this.sLanguage.create(idioma).subscribe(data=>{
      alert("Idioma añadido."); 
      this.cargarIdiomas();
      this.addPropiety = true;
  }, err=>{
    alert("Falló.");
    this.router.navigate(['']);
  })}

  deleteIdioma(id?:number){
    if(id != undefined){
      this.sLanguage.delete(id).subscribe(data =>{
        this.cargarIdiomas();
      },err =>{
        alert("Fallo borrar idioma!");
      })
    }
  }

  editPropiety=true;
  addPropiety=true;
  getAgregar(){
    this.addPropiety=false
  }
  getHabilitarEdit(){
    this.editPropiety=false
  }
  getGuardarCambios(){
    this.editPropiety=true
    this.addPropiety=true
  }

}


