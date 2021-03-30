import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './sign-in/login.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class AuthModule { }
