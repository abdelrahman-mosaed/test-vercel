import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from '../projects/projects.component';
import { ClientsComponent } from '../clients/clients.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule,ProjectsComponent,ClientsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  

    


}
