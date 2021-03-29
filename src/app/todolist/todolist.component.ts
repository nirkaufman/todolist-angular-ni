import { Component, OnInit } from '@angular/core';
import {TodolistService} from './services/todolist.service';
import {Item} from './services/item';

@Component({
  selector: 'app-todolist',
  template: `
      <div class="wrapper">
          <div class="list-container">
              <h1>{{ title }}</h1>
              <div class="content-body">
                  <app-item-form (add)="addItem($event)"></app-item-form>
                  <app-list [items]="items"
                            (remove)="removeItem($event)"></app-list>
                  <app-footer [count]="items.length"
                              (clearCompleted)="clearCompleted()"></app-footer>
              </div>
          </div>
      </div>

  `,
  styles: [
  ]
})
export class TodolistComponent  {

  public title = 'Title';
  private todolist: TodolistService;

  constructor(todolist: TodolistService) {
    this.todolist = todolist;
  }

  get items(): Array<Item> {
    return this.todolist.items;
  }

  addItem(title: string): void {
    this.todolist.addItem(new Item(title));
  }

  removeItem(itemId: number): void {
    this.todolist.removeItem(itemId);
  }

  clearCompleted(): void {
    this.todolist.clearCompleted();
  }

}
