import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.page.html',
  styleUrls: ['./myaccount.page.scss'],
})
export class MyaccountPage {
  username: string = ''; // Initialize the property

  constructor(
    private authService: AuthorizationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.username = localStorage.getItem('username') || ''; // Retrieve the username from local storage
  }

  logout() {
    this.authService.logout(); // Call logout method
    // Clear all user-related data from local storage
    localStorage.removeItem('username');
    localStorage.removeItem('auth_token');
    localStorage.removeItem('email');
    this.router.navigateByUrl('/home', { replaceUrl: true }); // Navigate to home page and replace current URL
  }

  login() {
    this.router.navigate(['/login']);
  }

  register() {
    this.router.navigate(['/register']); // Navigate to the register page
  }
}
