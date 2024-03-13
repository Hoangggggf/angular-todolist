import { Component, ChangeDetectorRef, Injectable } from '@angular/core';
import { todowork } from './works';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AllWorkComponent } from './all-work/all-work.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, AllWorkComponent],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
@Injectable({providedIn:'root'})
export class AppComponent{
  title = 'To-do list';
  todoworks!: todowork[];
  constructor(private cdr: ChangeDetectorRef){
    this.todoworks = [];
  };
  addWork() {
    var input= (<HTMLInputElement>document.getElementById("task-input")).value;
    this.todoworks.push({content:input,completed:false});
    (<HTMLInputElement>document.getElementById("task-input")).value = '';
    this.cdr.detectChanges();
  };
  deleteWork(index: number){
    this.todoworks.splice(index,1);
    this.cdr.detectChanges();
  };
  completeWork(index: number){
    if (this.todoworks[index].completed == false)
    {
    this.todoworks[index].completed= true;
    }
    else
    {
      this.todoworks[index].completed = false
    }
    this.cdr.detectChanges();
  }
  jobLeft(){
    let jobs: number = 0;
    for (const element of this.todoworks){
      if (element.completed == false){
        jobs=jobs+1;
      }
    }
    return jobs;
  }
  sizeOfTodoworks(){
    return this.todoworks.length;
  } 
  getTodoWork(){
    return this.todoworks;
  }
  
}

