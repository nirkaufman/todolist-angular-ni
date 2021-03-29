import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './todolist/list/list.component';
import { ItemFormComponent } from './todolist/item-form/item-form.component';
import {FooterComponent} from './todolist/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemFormComponent,
    FooterComponent
  ],
  providers: [],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
