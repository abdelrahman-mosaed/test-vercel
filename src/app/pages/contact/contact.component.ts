import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl,Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private router: Router) {}
  myContactForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('',[Validators.required,Validators.pattern('^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$')]),
  })
  onSubmit(){
    if (this.myContactForm.valid){
      console.log(this.myContactForm.value);
      this.myContactForm.reset();
      this.router.navigate(['/home']);
    }
    else{
      this.myContactForm.markAllAsTouched();
      console.log("not valid");
    }
  }

}
