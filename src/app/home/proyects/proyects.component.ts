import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyect.model';
import { PersonaService } from 'src/app/service/persona.service';
import { SProyectsService } from 'src/app/service/s-proyects.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  TituloSeccion="Proyectos"
    
  modProy = new Proyecto ("","");
  proyectos: Proyecto[] = [];

  constructor(private sProy:SProyectsService, private tokenService: TokenService, private router:Router) { }
  
  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();    

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarProyectos():void{
    this.sProy.listar().subscribe(data=>{this.proyectos = data})
  }

  addProy(proy:Proyecto){
    this.sProy.create(proy).subscribe(data=>{
      alert("Proyecto añadido.");
      this.cargarProyectos();
      this.addPropiety = true;
    }, err => {
      alert("Falló.");
      this.router.navigate(['']);
    })
  }
  
  deleteProy(id?:number){
    if (id != undefined) {
      this.sProy.delete(id).subscribe(data => {
        this.cargarProyectos();
        this.addPropiety = true;
      }, err => {
        alert("Falló.");
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

