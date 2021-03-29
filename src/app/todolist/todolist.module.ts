import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodolistComponent} from './todolist.component';
import {FooterComponent} from './footer/footer.component';
import {ListComponent} from './list/list.component';
import {ItemFormComponent} from './item-form/item-form.component';

@NgModule({
  declarations: [
    TodolistComponent,
    FooterComponent,
    ListComponent,
    ItemFormComponent],
  exports: [
    TodolistComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TodolistModule {
}
