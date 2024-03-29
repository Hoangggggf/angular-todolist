import { Component, NgModule, PLATFORM_ID, Inject, Injectable } from "@angular/core";
import { CommonModule } from "@angular/common";
import { todowork } from "./works";
import { isPlatformBrowser } from "@angular/common";

@Injectable({providedIn: 'root'})
export class MyServices {
    isBrowser: boolean;
    storageKey = 'user-job';
    todoworks!: todowork[];
    constructor(@Inject(PLATFORM_ID) private platformID: Object) {
        this.isBrowser = isPlatformBrowser(platformID);
        if (this.isBrowser) {
            if (localStorage.getItem(this.storageKey) === null) {
                this.todoworks = [];
            }
            else this.todoworks = JSON.parse(localStorage.getItem(this.storageKey));
        }
        else this.todoworks = [];
    }
    localStorageUpdate() {
        if (this.isBrowser) {
            localStorage.clear();
            localStorage.setItem(this.storageKey, JSON.stringify(this.todoworks));
        }
    };
    addWork(workName: string) {
        this.todoworks.push({ content: workName, completed: false });
        this.localStorageUpdate();
    };
    deleteWork(id: number) {
        this.todoworks.splice(id, 1);
        this.localStorageUpdate();
    };
    completeWork(id: number) {
        if (this.todoworks[id].completed == false) {
            this.todoworks[id].completed = true;
        }
        else {
            this.todoworks[id].completed = false
        }
        this.localStorageUpdate();
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
        console.log(this.todoworks.length);
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
          }}}
      editWork(id: number, newWork: string) {
        this.todoworks[id].content = newWork;
        this.localStorageUpdate();
      }
}