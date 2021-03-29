import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [UserProfileComponent],
  exports: [UserProfileComponent],
  imports: [CommonModule]
})
export class UserProfileModule { }
