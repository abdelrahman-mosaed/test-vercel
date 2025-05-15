import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { RouterModule,Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ProjectsComponent,
    ClientsComponent,
    RouterModule,
    ContactComponent
  ],
  providers: [],
  bootstrap: [],
  declarations: [
    
  
    ContactComponent
  ]
})
export class AppModule { }
