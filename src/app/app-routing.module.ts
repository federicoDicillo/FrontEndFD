import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutmeComponent } from './home/about-me/edit-aboutme.component';
import { EditEducationComponent } from './home/education/edit-education.component';
import { EditExperienceComponent } from './home/experience/edit-experience.component';
import { HomeComponent } from './home/home.component';
import { EditProfileComponent } from './home/profile-card/edit-profile.component';
import { EditProyectsComponent } from './home/proyects/edit-proyects.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'home',redirectTo:"", pathMatch:"full"},
  {path:'editAboutme/:id', component:EditAboutmeComponent},
  {path:'editProfile/:id', component:EditProfileComponent},
  {path:'editProyect/:id', component:EditProyectsComponent},
  {path:'editExplab/:id', component:EditExperienceComponent},
  {path:'editEducation/:id', component:EditEducationComponent},

  {path:"**", component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
