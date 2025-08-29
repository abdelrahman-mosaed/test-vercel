import { Injectable } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SnipperService {

  constructor(private spinner:NgxSpinnerModule) { }
  
}
