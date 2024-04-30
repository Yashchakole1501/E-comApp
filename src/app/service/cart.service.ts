import { Injectable } from '@angular/core';
import { WebsiteCategory } from '../websitecategory.service';
import { AlertController } from '@ionic/angular'; // Import AlertController for showing alerts

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly storageKeyPrefix = 'cartItems_'; // Prefix for storing cart items

  constructor(private alertController: AlertController) {} // Inject AlertController

  // Method to add item to cart
  async addToCart(item: WebsiteCategory, quantity: number = 1) {
    let cartItems = this.getSelectedItems();

    // Find if the item is already in the cart
    const index = cartItems.findIndex(cartItem => cartItem.id === item.id);

    if (index !== -1) {
      // If item exists in the cart, update the quantity
      cartItems[index].quantity += quantity;
    } else {
      // If item doesn't exist, add it to the cart with the provided quantity
      item.quantity = quantity;
      cartItems.push(item);
    }

    this.updateLocalStorage(cartItems);
    
    // Show an alert message that the item has been added to the cart
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'The item has been added to the cart.',
      buttons: ['OK']
    });

    await alert.present();
  }

  // Method to retrieve cart items associated with the logged-in user or for guests
  getSelectedItems(): WebsiteCategory[] {
    const username = localStorage.getItem('username');
    const guestCartKey = this.getGuestCartKey();

    if (username) {
      // If user is logged in, retrieve cart items associated with the user
      const storedItems = localStorage.getItem(this.storageKeyPrefix + username);
      if (storedItems) {
        return JSON.parse(storedItems);
      }
    } else {
      // If user is not logged in, retrieve guest cart items
      const guestCartItems = localStorage.getItem(guestCartKey);
      if (guestCartItems) {
        return JSON.parse(guestCartItems);
      }
    }
    
    return [];  
  }

  // Method to associate cart items with the logged-in user
  associateCartWithUser(username: string) {
    const guestCartKey = this.getGuestCartKey();
    const guestCartItems = localStorage.getItem(guestCartKey);

    if (guestCartItems) {
      // If there are guest cart items, associate them with the logged-in user
      localStorage.setItem(this.storageKeyPrefix + username, guestCartItems);
      // Clear the guest cart items
      localStorage.removeItem(guestCartKey);
    }
  }

  // Method to clear cart
  clearCart() {
    const username = localStorage.getItem('username');
    if (username) {
      localStorage.removeItem(this.storageKeyPrefix + username);
    } else {
      const guestCartKey = this.getGuestCartKey();
      localStorage.removeItem(guestCartKey);
    }
  }

  // Method to update local storage with cart items
  private updateLocalStorage(cartItems: WebsiteCategory[]) {
    const username = localStorage.getItem('username');
    if (username) {
      localStorage.setItem(this.storageKeyPrefix + username, JSON.stringify(cartItems));
    } else {
      const guestCartKey = this.getGuestCartKey();
      localStorage.setItem(guestCartKey, JSON.stringify(cartItems));
    }
  }

  // Method to remove item from cart
  async removeItem(item: WebsiteCategory) {
    const username = localStorage.getItem('username');
    if (username) {
      let cartItems = this.getSelectedItems();
      const index = cartItems.findIndex(cartItem => cartItem.id === item.id);
      if (index !== -1) {
        cartItems.splice(index, 1);
        localStorage.setItem(this.storageKeyPrefix + username, JSON.stringify(cartItems));
    
        // Show an alert message that the item has been removed from the cart
        const alert = await this.alertController.create({
          header: 'Success',
          message: 'The item has been removed from the cart.',
          buttons: ['OK']
        });

        await alert.present();
      }
    }
  }

  // Method to get the storage key prefix
  getStorageKeyPrefix(): string {
    return this.storageKeyPrefix;
  }

  // Method to get the guest cart storage key
  private getGuestCartKey(): string {
    return this.storageKeyPrefix + 'guest';
  }
  getGuestCartItems(): WebsiteCategory[] {
    const guestCartKey = this.getGuestCartKey();
    const guestCartItems = localStorage.getItem(guestCartKey);
    return guestCartItems ? JSON.parse(guestCartItems) : [];
}

}
