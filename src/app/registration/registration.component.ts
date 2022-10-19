import { Component, Output, EventEmitter } from '@angular/core';
import { Registrations } from '../Models/Registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  name: string = '';
  emailId: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  @Output() addRegistration = new EventEmitter<Registrations>();

  addNewRegistration() {
    let registration = {
      name: this.name,
      emailId: this.emailId,
      newPassword: this.newPassword,
      confirmPassword: this.confirmPassword,
    };
    this.addRegistration.emit(registration);
    this.name = '';
    this.emailId = '';
    this.newPassword = '';
    this.confirmPassword = '';
  }
}
