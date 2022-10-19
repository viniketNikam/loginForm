import { Component, Output, EventEmitter } from '@angular/core';
import { Logins } from '../Models/Logins';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  title = 'Login';

  userName: string = '';
  password: string = '';

  @Output() addLogin = new EventEmitter<Logins>();

  userLogin() {
    let login = {
      userName: this.userName,
      password: this.password,
    };
    this.addLogin.emit(login);
    this.userName = '';
    this.password = '';
  }
}
