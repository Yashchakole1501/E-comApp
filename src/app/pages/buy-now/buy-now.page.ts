import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { MainService } from 'src/app/services/main.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.page.html',
  styleUrls: ['./buy-now.page.scss'],
})
export class BuyNowPage {
  selectedItemsList: any[] = [];
  dataSource: any;
  ApiResult: any;
  selectedPaymentOption: any;
  productDetails: any;
  quantity: number = 0; // Initialize quantity
  orderDetailsItem: any[] = []; // Initialize orderDetailsItem

  constructor(
    private alertController: AlertController,
    private navCtrl: NavController,
    private mainService: MainService,
    public cartService: CartService, // Inject CartService
    private router: Router,
  ) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      const state = navigation.extras.state;
      if (state['orderDetailsItem'] && state['orderDetailsItem'].length > 0) {
        this.orderDetailsItem = state['orderDetailsItem']; // Assign selected items to orderDetailsItem
      }
      console.log('State received in BuyNowPage:', state);
      
      // Assign received values to class properties
      this.productDetails = state['productDetails'];
      this.quantity = state['quantity'];
      this.orderDetailsItem = state['orderDetailsItem'] || []; // Ensure orderDetailsItem is initialized as an empty array if not provided
  
      // Log the received values
      console.log('Product Details:', this.productDetails);
      console.log('Quantity:', this.quantity);
      console.log('Order Details Item:', this.orderDetailsItem);
    }
  }
  
  async showLoginAlert() {
    const username = localStorage.getItem('username');
    if (username) {
      this.placeOrder(username); // Pass the username to placeOrder
    } else {
      const alert = await this.alertController.create({
        header: 'Login Required',
        message: 'You need to login before purchasing.',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            },
          },
          {
            text: 'Login',
            handler: () => {
              console.log('Login clicked');
              this.navCtrl.navigateForward(['/login']);
            },
          },
        ],
      });
      await alert.present();
    }
  }

  async placeOrder(username: string) {
    let orderData = this.constructOrderData(username);
    if (orderData.OrderDetailsItem.length === 0) {
      const navigation = this.router.getCurrentNavigation();
      if (navigation && navigation.extras && navigation.extras.state) {
        const state = navigation.extras.state;
        console.log('State received in BuyNowPage:', state);
        // Assign received values to class properties
        this.productDetails = state['productDetails'];
        this.quantity = state['quantity'];
        this.orderDetailsItem = state['orderDetailsItem'] || []; // Ensure orderDetailsItem is initialized as an empty array if not provided
        orderData = {
          ...orderData,
          OrderDetailsItem: this.orderDetailsItem
        };
      }
    }
  
    await this.WebSite_OrderInfo_OrderDetails_Insert(orderData);
    console.log('Order Details Item in placeOrder:', this.orderDetailsItem);
    // Your order placement logic here...
    this.cartService.clearCart();

    // Navigate to the confirmation page or any other page as needed
    this.router.navigate(['/home']);
  }
  

  constructOrderData(username: string) { // Accept the username as parameter
    const selectedItems = this.cartService.getSelectedItems();
    let orderDetailsItem = selectedItems.map(item => {
      return { "PID": item.id, "Quantity": item.quantity };
    });
  
    // Check if orderDetailsItem is empty or not received from ngOnInit
    if (this.orderDetailsItem.length > 0) {
      // Use orderDetailsItem from state received in ngOnInit
      orderDetailsItem = this.orderDetailsItem;
    }
  
    console.log('Order Details Item:', orderDetailsItem); // Log the orderDetailsItem
    return {
      "Pid": "6b0af835-1e8a-40d5-a876-1f5fe20fc557",
      "ApplicationId": "1020",
      "IsCipher": "0",
      "UserName": username, // Use the passed username
      "OrderDetailsItem": orderDetailsItem
    };
  }
  
  
  WebSite_OrderInfo_OrderDetails_Insert(orderData: any) {
    this.mainService.TwoMethod(orderData).then((value: any) => {
      // Log the response received from the server
      console.log('Response from server:', value);

      // Check if the response contains data
      if (value && value.table) {
        this.ApiResult = value;
        this.dataSource = value.table;
        console.log('ApiResult:', this.ApiResult); // Log the ApiResult

        // Extract result and spResult from the response
        const { result, spResult } = value.table[0];

        // Order successfully placed, show a success message with the received result and spResult
        this.showSuccessAlert(result, spResult);
      } else {
        // Order failed, show an error message
        this.showErrorAlert();
      }
    }).catch((error: any) => {
      // Log and handle any errors that occur during the API request
      console.error('Error:', error);
      // Show error message or handle as needed
      this.showErrorAlert();
    });
  }

  async showSuccessAlert(result: number, spResult: string) {
    const alert = await this.alertController.create({
      header: 'Order Placed Successfully',
      message: `ORDER NO.: ${result}
       TRACKId: ${spResult}`, // Display the result and spResult received from the server with line breaks
      buttons: ['OK']
    });
    await alert.present();
  }

  async showErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Failed to place your order. Please try again later.',
      buttons: ['OK'],
    });
    await alert.present();
  }
  myaccount(){
    this.router.navigate(['myaccount'])
  }
  goToCartPage(){
    this.router.navigate(['add-to-cart'])
  }
}
