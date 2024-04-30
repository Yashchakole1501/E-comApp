import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  _apiURI: string;

  constructor() {
    this._apiURI = "https://serverengg.oceansofttech.net/api";
    // this._apiURI = "http://localhost:12074/";
  }

  getApiURI() {
    return this._apiURI;
  }
}
