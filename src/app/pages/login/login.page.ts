import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators'; // Import catchError and map operators
import { AuthorizationService } from 'src/app/services/auth.service'; // Import your AuthorizationService
import { BehaviorSubject, throwError } from 'rxjs'; // Import BehaviorSubject if you're using it
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  token: any;
  loading2 = false;
  appId: any;
  baseUrl: string = '';
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  authNavStatus$ = this._authNavStatusSource.asObservable();
  private loggedIn = false;
  email = "";
  password = "";
  isLoggedIn = false; // Add this property

  constructor(
    private authService: AuthorizationService,
    private router: Router,
    private http: HttpClient, // Inject HttpClient
    private mainservice: MainService
  ) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
    this.authService.logout();

    // Check if the user is already logged in
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  login() {
    this.loading2 = true;
    // Call the login method with the email and password properties
    this.authService.login(this.email, this.password)
      .subscribe(
        (response: any) => {
          if (response.result == 1) {
            // Store the username in local storage
            localStorage.setItem('username', this.email);
            this.router.navigate(['/home']);
            alert("Logged In Successfully");
            this.isLoggedIn = true; // Set isLoggedIn to true
          } else {
            alert("Login Failed");
            this.isLoggedIn = false; // Set isLoggedIn to false
          }
          this.loading2 = false;
        },
      );
  }

  forgotPassword() {
    // Navigate to forgot password page
    this.router.navigate(['/forgot-password']);
  }

  register() {
    // Navigate to register page
    this.router.navigate(['/register']);
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false; // Set isLoggedIn to false
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
}