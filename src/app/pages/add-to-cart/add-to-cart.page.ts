  import { Component, OnInit } from '@angular/core';
  import { NavController, AlertController, LoadingController } from '@ionic/angular';
  import { ActivatedRoute, Router } from '@angular/router';
  import { CartService } from 'src/app/service/cart.service';
  import { WebsiteCategory } from 'src/app/websitecategory.service'; // Import WebsiteCategory interface

  @Component({
    selector: 'app-add-to-cart',
    templateUrl: './add-to-cart.page.html',
    styleUrls: ['./add-to-cart.page.scss'],
  })
  export class AddToCartPage implements OnInit {
    selectedItems: WebsiteCategory[] = []; // Change the type to WebsiteCategory
    totalAmount: number = 0; // Variable to store the total amount
    selectedItemsList: any[] = []; // Array to store selected items

    constructor(
      private navCtrl: NavController,
      private route: ActivatedRoute,
      private router: Router,
      private alertCtrl: AlertController,
      private cartService: CartService,
      private loadingCtrl: LoadingController // Add this line
    ) { }
  async ngOnInit() {
      // Display loader while data is being loaded
      const loader = await this.loadingCtrl.create({
          message: 'Loading...', // You can customize the message here
          spinner: 'circles', 
          duration: 2000 ,// Choose a spinner type
          translucent: true,
          backdropDismiss: false // Prevent dismissing by tapping background
      });
      await loader.present();
    
      try {
          // Retrieve the selected items from the CartService
          this.selectedItems = this.cartService.getSelectedItems();
        
          // Check if the user is not logged in
          const username = localStorage.getItem('username');
          if (!username) {
              // If the user is not logged in, clear the selected items and retrieve cart items stored for guests
              this.selectedItems = []; // Clear selected items
              const guestCartItems = this.cartService.getGuestCartItems(); // Retrieve guest cart items
              this.selectedItems.push(...guestCartItems); // Add guest cart items to selectedItems
          }
        
          // Calculate the total amount initially
          this.calculateTotalAmount();
      } catch (error) {
          console.error('Error loading data:', error);
      } finally {
          // Dismiss the loader when data loading is complete
          await loader.dismiss();
      }
  }

    
    // Function to decrease quantity of an item
    decreaseQuantity(item: WebsiteCategory) {
      if (item.quantity > 1) {
        item.quantity--;
        // Recalculate total amount after decreasing quantity
        this.calculateTotalAmount();
      }
    }

    // Function to increase quantity of an item
    increaseQuantity(item: WebsiteCategory) {
      item.quantity++;
      // Recalculate total amount after increasing quantity
      this.calculateTotalAmount();
    }

    continueToBuy() {
      if (this.selectedItemsList.length > 0) {
        // Construct orderDetailsItem array with only id and quantity
        const orderDetailsItem = this.selectedItemsList.map(item => ({ PID: item.id, Quantity: item.quantity }));
        // Pass the orderDetailsItem to the BuyNowPage
        this.router.navigate(['buy-now'], { state: { orderDetailsItem: orderDetailsItem } });
      } else {
        // Handle case when no item is selected
        // You can display an alert or take appropriate action
        this.presentAlert();
      }
    }
    async presentAlert() {
      const alert = await this.alertCtrl.create({
        header: 'Alert',
        message: 'Please select an item to proceed.',
        buttons: ['OK']
      });

      await alert.present();
    }

    toggleSelection(item: any) {
      if (item.selected) {
        this.selectedItemsList.push(item);
      } else {
        const index = this.selectedItemsList.indexOf(item);
        if (index !== -1) {
          this.selectedItemsList.splice(index, 1);
        }
      }
    }
    
    calculateTotalAmount() {
      this.totalAmount = this.selectedItems.reduce((total, item) => {
        // Calculate the discounted price of the item
        const discountedPrice = item.mrp - item.discount;
        // Add the discounted price multiplied by the quantity to the total
        return total + (discountedPrice * item.quantity);
      }, 0);
    }
    

    buyNow(){
      this.router.navigate(['/buy-now'])
    }

    removeItem(item: WebsiteCategory) {
      const index = this.selectedItems.indexOf(item);
      if (index !== -1) {
        this.selectedItems.splice(index, 1);
        // Update localStorage after removing the item
        this.cartService.removeItem(item);
        // Recalculate total amount after removing item
        this.calculateTotalAmount();
    
        // Check if the user is not logged in
        const username = localStorage.getItem('username');
        if (!username) {
          // If the user is not logged in, remove the item from the guest cart in local storage
          const guestCartKey = this.cartService.getStorageKeyPrefix() + 'guest';
          let guestCartItems = JSON.parse(localStorage.getItem(guestCartKey) || '[]');
          const itemIndex = guestCartItems.findIndex((cartItem: { id: number; }) => cartItem.id === item.id);
          if (itemIndex !== -1) {
            guestCartItems.splice(itemIndex, 1);
            localStorage.setItem(guestCartKey, JSON.stringify(guestCartItems));
          }
        }
      }
    }
    calculateTotalPrice(item: WebsiteCategory): number {
      // Calculate the discounted price
      const discountedPrice = item.mrp - item.discount;
      // Multiply the discounted price by the quantity
      return discountedPrice * item.quantity;
    }
    
  }
    