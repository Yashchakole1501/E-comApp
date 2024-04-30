import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput, Subject } from 'rxjs';
import { global } from '@angular/compiler/src/util';
import { catchError, map } from 'rxjs/operators';
// const baseUrl="https://api.instamojo.com/oauth2/token/";
function _window(): any {
  return window;
}
@Injectable({
  providedIn: 'root'
})
export class InstamojoserviceService implements OnInit {
  appId: any;
  handleError!: (err: any, caught: Observable<any>) => ObservableInput<any>;
  addpara: any;

  get nativeWindow(): any {
    return _window();
  }

  constructor(public http: Http) { }
  ngOnInit(): void {
    // this.login();
  }
  // login() {

  //   let headers = new Headers();
  //   //let IPAddress:string=  "::9";
  //   let ApplicationId:string= "grant_type=client_credentials";
  // //  let IsCipher:string="0";
  // let email:any="client_id=EBMBPbZspSppHOQoc2IFgKTrEmM2ljb2Q1Uolia6";
  // let password:any="client_secret=ZmA94LiYQvGxoh9MCgdWenBPo3WbZaOLEcyPk2bQ2fTxkjYpak5U6rJcJWM6GbNmT7DV2fHnLdK4lmGy0prQt8GRELzVClpFj75c87hKl8GJm5XoHdLkPUMtybSkB98H";

  //   //sessionStorage.getItem('IPAddress');

  //   headers.append('Content-Type', 'application/json');
  //   headers.append('allow-control-origin', '*');

  //   return this.http
  //     .post(
  //       baseUrl,
  //       JSON.stringify({ApplicationId,email,password}), {headers}

  //     ).pipe(map((res:any) => {

  //       if(res!=""){
  //       console.log(JSON.stringify(res));
  //       localStorage.setItem('auth',res);
  //       //Added New Line on 2018-12-32 By Nilesh to set username in session
  //  }

  //       return res;
  //     }))
  //     .pipe(catchError(this.handleError));
  // }

  result() {
    this.http
      .get('https://api.razorpay.com/v1/payments/');

  }
} 
