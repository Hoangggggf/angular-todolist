import { Component, ChangeDetectorRef, Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule, Event } from '@angular/router';
import { AllWorkComponent } from './all-work/all-work.component';
import { MyServices } from './service.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, AllWorkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
@Injectable({providedIn:'root'})
export class AppComponent {
  isBrowser;
  storageKey = 'user-job';
  title = 'TODO LIST';
  constructor(private cdr: ChangeDetectorRef, private router: Router, @Inject(MyServices) private myService: MyServices, @Inject(PLATFORM_ID) private platformID: Object) {
    this.isBrowser = isPlatformBrowser(platformID);
    this.router.events.subscribe((event: Event) => {
      if (this.isBrowser) { this.navBarChange(this.router.url) };
    })
  };

  addWork() {
    var input = (<HTMLInputElement>document.getElementById("task-input")).value;
    this.myService.addWork(input);
    (<HTMLInputElement>document.getElementById("task-input")).value = '';
    this.cdr.detectChanges();
  };

  deleteWork(id: number) {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
    var confirmButton = document.getElementById('confirm-delete');
    confirmButton.addEventListener('click', (e) => {
      this.myService.deleteWork(id);
      modal.style.display = "none";
      return;
    }, { once: true });
    document.getElementById('cancel-delete').addEventListener('click', () => {
      modal.style.display = "none";
    }, { once: true },
    )
  };

  completeWork(index: number) {
    this.myService.completeWork(index);
    this.cdr.detectChanges();
  }

  jobLeft() {
   return this.myService.jobLeft();
  }

  sizeOfTodoworks() {
    return this.myService.sizeOfTodoworks();
  }

  getTodoWork() {
    return this.myService.getTodoWork();
  }

  clearCompletedWork() {
  this.myService.clearCompletedWork();
    this.cdr.detectChanges();
  }

  editWork(id: number, newWork: string) {
    this.myService.editWork(id,newWork);
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

