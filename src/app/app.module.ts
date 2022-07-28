import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileCardComponent } from '../app/home/profile-card/profile-card.component';
import { AboutMeComponent } from '../app/home/about-me/about-me.component';
import { ProyectsComponent } from '../app/home/proyects/proyects.component';
import { EducationComponent } from '../app/home/education/education.component';
import { ExperienceComponent } from '../app/home/experience/experience.component';
import { SkillsComponent } from '../app/home/skills/skills.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { LanguagesComponent } from './home/languages/languages.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PersonaService } from '../app/service/persona.service';
import { interceptorProvider } from './service/interceptor-service';
import { EditAboutmeComponent } from './home/about-me/edit-aboutme.component';
import { EditProfileComponent } from './home/profile-card/edit-profile.component';
import { EditProyectsComponent } from './home/proyects/edit-proyects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProfileCardComponent,
    AboutMeComponent,
    ProyectsComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    LoginComponent,
    HomeComponent,
    Page404Component,
    LanguagesComponent,
    EditAboutmeComponent,
    EditProfileComponent,
    EditProyectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    PersonaService,
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
