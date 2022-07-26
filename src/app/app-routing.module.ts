import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutmeComponent } from './home/about-me/edit-aboutme.component';
import { HomeComponent } from './home/home.component';
import { EditProfileComponent } from './home/profile-card/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"home",redirectTo:"", pathMatch:"full"},
  {path:"editAboutme/:id", component:EditAboutmeComponent},
  {path:"editProfile/:id", component:EditProfileComponent},
  
  {path:"**", component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
