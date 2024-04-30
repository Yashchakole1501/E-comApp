import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-napthalene',
  templateUrl: './napthalene.page.html',
  styleUrls: ['./napthalene.page.scss'],
})
export class NapthalenePage implements OnInit {
  quantity: number = 1;
  itemDetails: any = {
    // Define your item details here
    name: 'Napthalene Balls',
    price: 10,
    // Add other details as needed
  };

  constructor(private router: Router) { }

  ngOnInit(): void {}
  addToCart(): void {
    // Pass all item details to the AddToCartPage and navigate
    this.router.navigate(['/add-to-cart'], { queryParams: { itemDetails: JSON.stringify(this.itemDetails), quantity: this.quantity } });
  }

  BuyNow(): void {
    // Pass quantity to the buy now page and navigate
    this.router.navigate(['/buy-now'], { queryParams: { quantity: this.quantity } });
  }

  increaseQuantity(): void {
    // Increment quantity
    this.quantity++;
  }

  decreaseQuantity(): void {
    // Ensure quantity doesn't go below 1
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  
}
