import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-all-work',
  standalone: true,
  imports: [CommonModule,AppComponent],
  styleUrl: './all-work.component.css',
  templateUrl: './all-work.component.html',
})
export class AllWorkComponent {
  constructor(@Inject(AppComponent) private service: AppComponent){};
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
    value.style.outline = "1px solid rgb(255, 115, 115)";
    value.addEventListener('blur',()=>{
      this.updateWork(i);
      value.style.outline = "none";
    },{once:true})
  }
  updateWork(i:number){
    var value=document.getElementById(i.toString());
    this.service.editWork(i,value.innerText);
  }
}