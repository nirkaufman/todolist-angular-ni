import { Component } from '@angular/core';
import {Item} from './services/item';
import {TodolistService} from './services/todolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Title';
  private todolist: TodolistService<Item>;

  constructor(todolist: TodolistService<Item>) {
    this.todolist = todolist;
  }

  get items(): Array<Item> {
    return this.todolist.items;
  }

  addItem(title: string): void {
    this.todolist.addItem(new Item(title));
  }

  removeItem(item: Item): void {
    this.todolist.removeItem(item.id);
  }

}
