import { Component } from '@angular/core';
import { Registrations } from './Models/Registration';
import { Logins } from './Models/Logins';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '';
  registration: Registrations[] = [];
  logins: Logins[] = [];
  isLogin: boolean = false;
  isRegistration: boolean = false;

  addUser(registration: Registrations) {
    this.registration.push(registration);
  }

  addLogin(login: Logins) {
    const loginData = this.registration.find(
      (register) => register.emailId == login.userName
    );
    if (loginData) {
      if (loginData.newPassword === login.password) {
      }
    }
  }

  showLogin() {
    this.isLogin = true;
    this.isRegistration = false;
  }
  showRegister() {
    this.isRegistration = true;
    this.isLogin = false;
  }
}
