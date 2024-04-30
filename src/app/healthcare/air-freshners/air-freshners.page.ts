import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-air-freshners',
  templateUrl: './air-freshners.page.html',
  styleUrls: ['./air-freshners.page.scss'],
})
export class AirFreshnersPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController, private cartService: CartService, private alertController: AlertController) { }

  ngOnInit(): void {
  }

  
  
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
