import {Component, Input, EventEmitter, Output, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {Item} from '../services/item';
import {CanDeactivate} from '@angular/router';

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
