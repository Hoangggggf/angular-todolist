import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { todowork } from './works';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

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
  }
}
