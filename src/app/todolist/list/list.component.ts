import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Item} from '../services/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  items: Array<Item>;

  @Output()
  remove = new EventEmitter<number>();

}
