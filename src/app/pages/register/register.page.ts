import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  MoObj: any = {};
  ApiResult: any;
  dataSource: any;
  RegisterForm = new FormGroup({
    UserName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
    Password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    FName: new FormControl('', Validators.required),
    LName: new FormControl('', Validators.required),
    Mobno: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]),
    Add1: new FormControl('', Validators.required),
    PinCode: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(6), Validators.maxLength(6)]),
    City: new FormControl('', Validators.required),
    ShippingAdd: new FormControl('', Validators.required),
    SAddPinCode: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(6), Validators.maxLength(6)]),
    SAddCity: new FormControl('', Validators.required),
  });

  constructor(
    private mainService: MainService,
    private alertController: AlertController,
    private router: Router 
  ) { }

  ngOnInit() {}

  async register() {

    if (this.RegisterForm.invalid) {
      this.presentAlert('Invalid Form', 'Please fill in all required fields correctly.');
      return;
    }

    try {
      const response = await this.Website_UserInfo_Insert();
      console.log('Response from server:', response);
      this.presentAlert('Success', 'Registration successful.');

    } catch (error) {
      console.error('Registration failed:', error);
      this.presentAlert('Error', 'Failed to register. Please try again later.');
    }
  }

  async Website_UserInfo_Insert() {
    const MoObj = {
      Pid: "2fa618f8-b9f1-446e-b280-ab031283786a",
      UserName: this.RegisterForm.value.UserName,
      Add1: this.RegisterForm.value.Add1,
      Email: this.RegisterForm.value.Email,
      FName: this.RegisterForm.value.FName,
      Password: this.RegisterForm.value.Password,
      LName: this.RegisterForm.value.LName,
      Mobno: this.RegisterForm.value.Mobno,
      PinCode: this.RegisterForm.value.PinCode,
      City: this.RegisterForm.value.City,
      ShippingAdd: this.RegisterForm.value.ShippingAdd,
      SAddPinCode: this.RegisterForm.value.SAddPinCode,
      SAddCity: this.RegisterForm.value.SAddCity
    };
 return this.mainService.TwoMethod(MoObj);
  }

async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
    this.router.navigate(['/login']);
  }
}
