import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  handleclick(event:any){
    let filter=document.querySelectorAll('.filter')
    let btnPress=event.target as HTMLElement
    if (btnPress.classList.contains('activeli')){
      btnPress.classList.remove('activeli')
      btnPress.classList.add('projectul')    
    }
    else if (btnPress.classList.contains('projectul')){
      btnPress.classList.remove('projectul')
      filter.forEach((item)=>{
        item.classList.remove('activeli')
        item.classList.add('projectul')
        
      })
      btnPress.classList.add('activeli')    
    }  

    let all=document.querySelectorAll('.all')
    let web=document.querySelectorAll('.web')
    let digital=document.querySelectorAll('.digital')
    let sponsor=document.querySelectorAll('.sponsor')


    if(btnPress.id.includes('all')){
      all.forEach((item)=>{
        item.classList.replace('d-none','d-block')
      })
      
    }
    else if (btnPress.id.includes('web')){
      all.forEach((item)=>{
        item.classList.add('d-none')
      })
      web.forEach((item)=>{
        item.classList.replace('d-none','d-block')

      })
    }
    else if (btnPress.id.includes('digital')){
      all.forEach((item)=>{
        item.classList.add('d-none')
      })
      digital.forEach((item)=>{
        item.classList.replace('d-none','d-block')

      })
      
    }
    else if (btnPress.id.includes('sponsor')){
      all.forEach((item)=>{
        item.classList.add('d-none')
      })
      sponsor.forEach((item)=>{
        item.classList.replace('d-none','d-block')

      })
    }
    

  }


}
