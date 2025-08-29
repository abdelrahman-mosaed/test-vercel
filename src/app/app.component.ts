import { Component } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule ,NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    FooterComponent,
    RouterOutlet,
    RouterModule,
    NgxSpinnerModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mosaedPortfolio';
  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }
    
  }

