import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

export interface CurrentUser {
  id: number;
  name: string;
  email: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  currentUser: CurrentUser | null;

  constructor(private router: Router, private httpClient: HttpClient) {
    this.currentUser = null;
  }

  signIn(userName: string, password: string): void {
    // go to API and ask for a user
    this.httpClient.get<CurrentUser>('https://jsonplaceholder.typicode.com/users/1')
        .subscribe(user => {
          this.currentUser = user;
          this.router.navigate(['profile']);
        });

  }

  signPut(): void {
    // todo: hit the API
    this.currentUser = null;
  }

}
