import { Component } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    FooterComponent,
    RouterOutlet,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mosaedPortfolio';
    
  }

