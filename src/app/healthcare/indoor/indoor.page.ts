import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-indoor',
  templateUrl: './indoor.page.html',
  styleUrls: ['./indoor.page.scss'],
})
export class IndoorPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController, private cartService: CartService, private alertController: AlertController) { }

  ngOnInit(): void {
  }

  
  
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
