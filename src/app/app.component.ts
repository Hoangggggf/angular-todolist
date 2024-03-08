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
    console.log(input);
    this.todoworks.push({content:input,completed:true});
    this.cdr.detectChanges();
  };  
}
