import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [ Validators.required ]),
      password: new FormControl(),
    });
  }

  get username(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  reset() {
    this.loginForm.reset();
  }

  signIn(): void {
    if(this.username.valid) {
      console.log(this.loginForm.value);
    }
    // this.authService.signIn('nirkaufman', '1234');
  }
}
