import {Injectable} from '@angular/core';
import {Item} from './item';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../auth/auth.service';

@Injectable({providedIn: 'root'})
export class TodolistService {
  items: Array<Item> = [];
  title: string;

  constructor(private httpClient: HttpClient,
              private authService: AuthService) {}

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

  reloadItems(): void {
    this.httpClient
        .get<Item[]>(`https://jsonplaceholder.typicode.com/todos?userId=${this.authService.currentUser.id}`)
        .subscribe( items => {
          this.items = items.map(item => new Item(item.title, item.id, item.completed));
        });

  }
}
