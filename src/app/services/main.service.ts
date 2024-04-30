import { Injectable } from '@angular/core';
import { BaseService } from './base.service'
import { ApiConfigService } from './api-config.service'
// import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { catchError, map } from 'rxjs/operators';
import { ApplicationIdService } from '../services/application-id.service';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


// Use the service in the respective component or service

// import { error } from 'console';
//import { promise } from 'protractor';
  const url = "https://serverengg.oceansofttech.net/api/zion/main";
// const url = "https://serverengg.oceansofttech.net/api/ZION/SENDMAIL";
@Injectable({
  
  providedIn: 'root'
})
export class MainService extends BaseService {
  [x: string]: any;
  WebSite_Sub_Category_Select_FkWebSite_Category(MoObj: any) {
    throw new Error('Method not implemented.');
  }
  /** */
  public products: any = []; // new variable declared on 2020-02-13 by nilesh  
  static PageId: any;
  static Pageidmaster: any;
  /** */
  baseUrl: string;
  appId: any;
  public errors: any;
  constructor(private http: HttpClient, private configService: ApiConfigService, private applicationId: ApplicationIdService) {
    super();
    this.baseUrl = configService.getApiURI();
    this.appId = applicationId.getApplicationId();
  }
  //start working after login//
  objInnerMethod(MoObj: any) {
    MoObj.ApplicationId = this.appId; 
    MoObj.IsCipher = "1";
    var obj = MoObj;
    var body = JSON.stringify(obj);
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.set('Authorization', `Bearer ${authToken}`);
    // let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl + '/cipher/main', body,{headers,responseType:'json'})
      .pipe(map((data) => {
        return data;
      }))
  }
  //start working before login//
  objOuterMethod(MoObj: any) {
    MoObj.ApplicationId = this.appId;
    MoObj.IsCipher = "0";
    var obj = MoObj;
    var body = JSON.stringify(obj);
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let options = new HttpHeaderResponse({ headers: headers });
    //  const responseType = 'json';
    return this.http.post(this.baseUrl + "/zion/main", body,options)
      .pipe(map((data) => {
        return data;
      }))
  }
  emailMethod(MoObj: any) {
    MoObj.ApplicationId = this.appId;
    MoObj.IsCipher = "0";
    // MoObj.PkSystemEmailSetting=2;
    // MoObj.message="Thank you for Subscribe"
    var obj = MoObj;
    var body = JSON.stringify(obj);
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let options = new HttpHeaderResponse({ headers: headers }); 
      return this.http.post(url, body, options)
      .pipe(map((data) => {
        return data;
      }))
  }

  OneMethod(MoObj: any) {
    return new Promise(resolve => {
      this.objInnerMethod(MoObj)
        .subscribe(
          (result)=>{
            resolve(result)
          },
          // result => {
          //   resolve(result);
          // },
          // error => this.errors = error
          );
    });
  }

  TwoMethod(MoObj: any) {
    return new Promise(resolve => {
      this.objOuterMethod(MoObj)
        .subscribe(
          {
            next:(result)=>{ 
              resolve(result)
            },
            error : (error)=>{
              this.errors = error
            }
          }
          );
    })
    
  }

 

  ImageUploader(file: any): Observable<any> {debugger
    const filepath = file;
    const MoObj: any = {};
    MoObj.ApplicationId = this.appId;
    MoObj.IsCipher = "1";
    MoObj.PkSystemUploadDocSetting = "1";

    const formObj = new FormData();
    formObj.append('file', filepath);
    formObj.append('PkSystemUploadDocSetting', JSON.stringify(MoObj))
    return this.http.post(this.baseUrl + '/Zion/UPLOAD', formObj,{ responseType: 'text'})
      .pipe(
        map((data:any) => {
          console.log(data);
          debugger
          return data; // Assuming the server response is the expected data
        }),
        catchError((error) => {
          console.error('Error during file upload:', error);
          return throwError('File upload failed. Please try again.');
        })
      );
  }

}

