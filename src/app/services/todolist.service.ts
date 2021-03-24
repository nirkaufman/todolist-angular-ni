import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class TodolistService<T> {
  items: Array<T>;
  title: string;

  constructor() {
    this.items = [];
  }

  addItem(item: T): void {
    this.items.push(item);
  }

  removeItem(itemId: number): void {
    function filterItem(item): boolean {
      return item.id !== itemId;
    }

    this.items = this.items.filter(filterItem);
  }
}
