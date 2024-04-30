import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConfigService } from '../services/api-config.service';
import { ApplicationIdService } from '../services/application-id.service';
import { BaseService } from "../services/base.service";
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService extends BaseService {
  token: any;
  appId: any;
  baseUrl: string = '';
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  authNavStatus$ = this._authNavStatusSource.asObservable();
  private loggedIn = false;

  constructor(
    private http: HttpClient,
    private configService: ApiConfigService,
    private router: Router,
    private applicationId: ApplicationIdService
  ) {
    super();
    this.loggedIn = !!localStorage.getItem('auth_token');
    this._authNavStatusSource.next(this.loggedIn);
    this.baseUrl = configService.getApiURI();
    this.appId = applicationId.getApplicationId();
  }

  login(email: any, password: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const ApplicationId: string = this.appId;
    const IsCipher: string = "0";
    const Pid: string = "05104e95-8636-4298-96f1-5bccab959e9c";

    return this.http
      .post<any>(
        this.baseUrl + '/login',
        { ApplicationId, Pid, IsCipher, email, password },
        { headers }
      ) 
      .pipe(
        map(res => {
          if (res != "") {
            localStorage.setItem('auth_token', res.token);
            localStorage.setItem('email', email);
            this.loggedIn = true;
            this._authNavStatusSource.next(true);
          }
          return res;
        }),
        catchError(this.handleError)
      );
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('email');
    this.loggedIn = false;
    this._authNavStatusSource.next(false);
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return true; // You should implement your own logic here
  }
}
