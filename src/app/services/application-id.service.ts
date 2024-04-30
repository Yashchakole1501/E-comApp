import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationIdService {
  _applicationID: string = "";

  constructor() {
    this._applicationID = "1020"
    localStorage.setItem('appid', this._applicationID);
  }

  getApplicationId() {
    return this._applicationID;
  }
}
