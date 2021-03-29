import { Injectable } from '@angular/core';

export interface CurrentUser {
  id: number;
  name: string;
  email: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  currentUser: CurrentUser | null;

  constructor() {
    this.currentUser = null;
  }

  signIn(userName: string, password: string): void {
    // todo: hit the API
    console.log({userName, password});
    this.currentUser = {id: 1, name: 'Nir Kaufman', email: 'nir@500tech.com'};
  }

  signPut(): void{
    // todo: hit the API
    this.currentUser = null;
  }

}
