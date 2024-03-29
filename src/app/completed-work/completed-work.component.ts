import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { MyServices } from '../service.module';
@Component({
  selector: 'app-completed-work',
  standalone: true,
  imports: [CommonModule,AppComponent],
  styleUrl: './completed-work.component.css',
  templateUrl: './completed-work.component.html',
})
export class CompletedWorkComponent {
  constructor(private service: MyServices){};
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
}
