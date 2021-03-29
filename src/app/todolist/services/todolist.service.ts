import {Injectable} from '@angular/core';
import {Item} from './item';

@Injectable({providedIn: 'root'})
export class TodolistService {
  items: Array<Item>;
  title: string;

  constructor() {
    this.items = [];
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  removeItem(itemId: number): void {
    function filterItem(item): boolean {
      return item.id !== itemId;
    }

    this.items = this.items.filter(filterItem);
  }

  clearCompleted(): void {
    this.items = this.items.filter( item => !item.completed);
  }
}
