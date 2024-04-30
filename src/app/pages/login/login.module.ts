import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HTTP requests
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule for reactive forms
import { AuthorizationService } from 'src/app/services/auth.service'; // Import your AuthorizationService
// Import other services and components as needed

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    HttpClientModule, // Add HttpClientModule for HTTP requests
    ReactiveFormsModule // Add ReactiveFormsModule for reactive forms
  ],
  declarations: [LoginPage],
  providers: [AuthorizationService] // Add your service to the providers array if needed
})
export class LoginPageModule {}
