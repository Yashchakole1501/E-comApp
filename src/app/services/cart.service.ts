// cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsKey: string = 'cartItems';
  private cartItems: any[] = [];
  cartItemsChanged: any;
  
  constructor() {
    this.loadCartItems();
  }

  addToCart(item: any) {
    if (!this.isItemInCart(item)) {
      this.cartItems.push(item);
      this.saveCartItems();
    }
  }
  

  removeFromCart(itemToRemove: any) {
    this.cartItems = this.cartItems.filter(item => item !== itemToRemove);
    this.saveCartItems();
  }

  getCartItems() {
    return this.cartItems;
  }

  private saveCartItems() {
    localStorage.setItem(this.cartItemsKey, JSON.stringify(this.cartItems));
  }

  private loadCartItems() {
    const storedCartItems = localStorage.getItem(this.cartItemsKey);
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
    }
  }

  isItemInCart(itemToCheck: any): boolean {
    return this.cartItems.some(item => item.name === itemToCheck.name);
  }
}
