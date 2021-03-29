import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() count: number;
  @Output() clearCompleted = new EventEmitter();
}
