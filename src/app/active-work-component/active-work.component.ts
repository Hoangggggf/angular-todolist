import { Component,Injectable } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-active-work-component',
  standalone: true,
  imports: [CommonModule, AppComponent],
  template: `
    
  `,
  styleUrl: './active-work.component.css',
  templateUrl: './active-work.component.html',
})
export class ActiveWorkComponent {
  constructor(private service:AppComponent){};
  getTodoWork(){
    return this.service.getTodoWork();
  }
  completeWork(index:number){
    this.service.completeWork(index);
  }
  deleteWork(index: number){
    this.service.deleteWork(index);
  }
  todoworks = this.service.todoworks;
  
  editWork(i:number){
    var value=document.getElementById(i.toString());
    value.contentEditable="true";
    value.focus();
    value.addEventListener('blur',()=>{
      this.updateWork(i);
    },false)
  }
  updateWork(i:number){
    var value=document.getElementById(i.toString());
    this.service.editWork(i,value.innerText);
  }
}