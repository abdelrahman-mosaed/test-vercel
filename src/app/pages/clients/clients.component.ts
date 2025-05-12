import { Component, OnInit } from '@angular/core';
import 'owl.carousel';
declare var $: any;

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  standalone: true
})
export class ClientsComponent implements OnInit {
  ngOnInit() {
    $("#owl-demo").owlCarousel({
      autoPlay: true,
      items: 3,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 3],
      loop: true,
      margin: 30,
      nav: false
    });
  }
}
