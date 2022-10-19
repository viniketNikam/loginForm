import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormLabelComponent } from './form-label/form-label.component';

@NgModule({
  declarations: [AppComponent, RegistrationComponent, LoginFormComponent, FormLabelComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
