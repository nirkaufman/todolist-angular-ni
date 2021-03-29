import {Component} from '@angular/core';
import {AuthService, CurrentUser} from './auth/auth.service';

@Component({
  selector: 'app-root',
  template: `
      <nav *ngIf="currentUser">
          <ul>
              <div>
                  <li><a routerLink="/list">list</a></li>
                  <li><a routerLink="/profile">profile</a></li>
              </div>
              <li><span (click)="signOut()">logout {{currentUser.name}}</span></li>
          </ul>
      </nav>

      <router-outlet></router-outlet>
  `,
  styles: [`
      nav {
          background-color: lightgrey;
      }

      ul {
          list-style: none;
          display: flex;
          margin: 0;
          padding: 0;
          justify-content: space-between;

      }

      a {
          text-decoration: none;
      }

      li {
          display: inline;
          padding: 0 10px;
      }
  `]
})
export class AppComponent {

  constructor(private authService: AuthService) {}

  get currentUser(): CurrentUser {
    return this.authService.currentUser;
  }

  signOut(): void {
    this.authService.signPut();
  }
}
