import { Component, ChangeDetectorRef, Injectable, OnInit } from '@angular/core';
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
@Injectable({ providedIn: 'root' })
export class AppComponent {
  title = 'TODO LIST';
  todoworks!: todowork[];
  constructor(private cdr: ChangeDetectorRef) {
    this.todoworks = [];
  };
  addWork() {
    var input = (<HTMLInputElement>document.getElementById("task-input")).value;
    this.todoworks.push({ content: input, completed: false });
    (<HTMLInputElement>document.getElementById("task-input")).value = '';
    this.cdr.detectChanges();
  };
  deleteWork(index: number) {
    this.todoworks.splice(index, 1);
    this.cdr.detectChanges();
  };
  completeWork(index: number) {
    if (this.todoworks[index].completed == false) {
      this.todoworks[index].completed = true;
    }
    else {
      this.todoworks[index].completed = false
    }
    this.cdr.detectChanges();
  }
  jobLeft() {
    let jobs: number = 0;
    for (const element of this.todoworks) {
      if (element.completed == false) {
        jobs = jobs + 1;
      }
    }
    return jobs;
  }
  sizeOfTodoworks() {
    return this.todoworks.length;
  }
  getTodoWork() {
    return this.todoworks;
  }
  clearCompletedWork() {
    for (let i = 0; i < this.todoworks.length; i++) {
      if (this.todoworks[i].completed == true) {
        this.deleteWork(i);
      }
    }
  }
  editWork(index: number, newWork: string) {
    this.todoworks[index].content = newWork;
  }

  navBarChange(index: string) {
    switch (index) {
      case "all":
        document.getElementById("all").classList.add("selected");
        document.getElementById("active").classList.remove("selected");
        document.getElementById("completed").classList.remove("selected");
        break;
      case "active":
        document.getElementById("all").classList.remove("selected");
        document.getElementById("active").classList.add("selected");
        document.getElementById("completed").classList.remove("selected");
        break;
      case "completed":
        document.getElementById("all").classList.remove("selected");
        document.getElementById("active").classList.remove("selected");
        document.getElementById("completed").classList.add("selected");
        break;
    }
  }
}

