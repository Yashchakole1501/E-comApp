import { Injectable } from '@angular/core';
import * as $ from 'jquery';
@Injectable({
  providedIn: 'root'
})
export class LanguagetranslateService {

  constructor() { }
  wait(para: any) {
    // var val = e.target.value;
    // alert(val)
    if (para == 2) {
      $("#userid").text("पहचान :")
      $("#username").text("नाम :")
      $("#useraddress").text("पता:")

    }
    else if (para == 1) {
      // $("#userid").text(" आयडी:")
      // $("#username").text("नाव :")
      // $("#useraddress").text("पत्ता:")
      $("#userid").text("Id :")
      $("#username").text("name :")
      $("#useraddress").text("address:")


    } else {
      // $("#userid").text("Id :")
      // $("#username").text("name :")
      // $("#useraddress").text("address:")
      $("#userid").text(" आयडी:")
      $("#username").text("नाव :")
      $("#useraddress").text("पत्ता:")



    }
  }
}