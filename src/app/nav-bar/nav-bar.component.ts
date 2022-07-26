import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLogged = false;

  constructor(private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }

    document.querySelector("#bottompage").addEventListener("click", () => {
      window.scrollTo(0, document.body.scrollHeight);
     })
  }

  onLogout():void{
    this.tokenService.logout();
    window.location.reload();
  }



loguearse(){
 this.router.navigate(["/login"]);
}


}