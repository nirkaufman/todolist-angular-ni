import { Component } from '@angular/core';
import {TodolistService} from './services/todolist.service';
import {Item} from './services/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private todolist: TodolistService<Item>;
  public title = 'Title';

  constructor(todolist: TodolistService<Item>) {
    this.todolist = todolist;
  }

  get items(): Item[] {
    return this.todolist.items;
  }

  addItem(title: string): void {
    this.todolist.addItem(new Item(title));
  }

  removeItem(item: Item): void {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }


}
