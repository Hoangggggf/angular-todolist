import { Component,Injectable } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { MyServices } from '../service.module';
@Component({
  selector: 'app-active-work-component',
  standalone: true,
  imports: [CommonModule, AppComponent],
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
  todoworks = this.service.getTodoWork();
  
  editWork(i:number){
    var value=document.getElementById(i.toString());
    value.contentEditable="true";
    value.focus();

    value.addEventListener('blur',()=>{
      this.updateWork(i);
    },{once:true});
  }
  updateWork(i:number){
    var value=document.getElementById(i.toString());
    this.service.editWork(i,value.innerText);
  }
}