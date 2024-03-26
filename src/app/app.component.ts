import { Component, ChangeDetectorRef, Injectable, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { todowork } from './works';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule, RouterEvent, Event } from '@angular/router';
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
  isBrowser;
  storageKey = 'user-job';
  title = 'TODO LIST';
  todoworks!: todowork[];
  constructor(private cdr: ChangeDetectorRef, @Inject(PLATFORM_ID) private platformID: Object, private router: Router) {
    this.isBrowser = isPlatformBrowser(platformID);
    if (this.isBrowser) {
      if (localStorage.getItem(this.storageKey) === null) {
        this.todoworks = [];
      }
      else this.todoworks = JSON.parse(localStorage.getItem(this.storageKey));
    }
    else {
      this.todoworks = [];
    }
    this.router.events.subscribe((event: Event) => {
      if (this.isBrowser) { this.navBarChange(this.router.url) };
    })
  };
  addWork() {
    var input = (<HTMLInputElement>document.getElementById("task-input")).value;
    this.todoworks.push({ content: input, completed: false });
    if (this.isBrowser) {
      localStorage.clear();
      localStorage.setItem(this.storageKey, JSON.stringify(this.todoworks));
    }
    (<HTMLInputElement>document.getElementById("task-input")).value = '';
    this.cdr.detectChanges();
  };
  deleteWork(index: number) {
    this.todoworks.splice(index, 1);
    if (this.isBrowser) {
      localStorage.clear();
      localStorage.setItem(this.storageKey, JSON.stringify(this.todoworks));
    }
    this.cdr.detectChanges();
  };
  completeWork(index: number) {
    if (this.todoworks[index].completed == false) {
      this.todoworks[index].completed = true;
    }
    else {
      this.todoworks[index].completed = false
    }
    if (this.isBrowser) {
      localStorage.clear();
      localStorage.setItem(this.storageKey, JSON.stringify(this.todoworks));
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
        i = i - 1;
      }
    }
    this.cdr.detectChanges();
  }
  editWork(index: number, newWork: string) {
    this.todoworks[index].content = newWork;
    if (this.isBrowser) {
      localStorage.clear();
      localStorage.setItem(this.storageKey, JSON.stringify(this.todoworks));
    }
  }
  navBarChange(urlParams: string) {
    switch (urlParams) {
      case "/":
        document.getElementById("all").classList.add("selected");
        document.getElementById("active").classList.remove("selected");
        document.getElementById("completed").classList.remove("selected");
        break;
      case "/active":
        document.getElementById("all").classList.remove("selected");
        document.getElementById("active").classList.add("selected");
        document.getElementById("completed").classList.remove("selected");
        break;
      case "/completed":
        document.getElementById("all").classList.remove("selected");
        document.getElementById("active").classList.remove("selected");
        document.getElementById("completed").classList.add("selected");
        break;
    }
  }
}

