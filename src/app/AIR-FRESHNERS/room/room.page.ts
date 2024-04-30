import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {
  quantity: number = 1;
  itemDetails: any = {
    name: 'Room Freshners',
    price: 15,
    // Add other details as needed
  };

  constructor(private router: Router) { }

  ngOnInit() { }

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
