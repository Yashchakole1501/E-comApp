  import { Component, OnInit } from '@angular/core';
  import { NavController, LoadingController } from '@ionic/angular';
  import { MainService } from 'src/app/services/main.service';
  import { ActivatedRoute, Router } from '@angular/router';
  import { CartService } from 'src/app/service/cart.service';

  interface WebsiteCategory {
    selected: boolean; // Ensure this property is
    PkWebSiteProd_Category: number;
    pkWebSiteProd_Category: number;
    FkWebsite_Prod_Category: number;
    FkWebSiteSub_Category: number;
    productName: string;
    prodCateImg: string;
    folderPath: string;
    PkWebSiteSub_Category: number;
    id: number;
    brandName: string;
    code: string;
    size: string;
    mrp: number;
    dimensions: any;
    discount: number;
    totalPrice: number;
    colour: string;
    material: string;
    recommendedUseFor: string;
    quantity: number;
    weight: number;
    folderPath1: string;
    folderPath2: string;
    imgPath21: string; // Add the missing property\
    imgPath11:string;
    info:string;
    
  }


  @Component({
    selector: 'app-prodinfo',
    templateUrl: './prodinfo.page.html',
    styleUrls: ['./prodinfo.page.scss'],
  })
  export class ProdinfoPage implements OnInit {
    MoObj: any = {};
    ApiResult: any;
    dataSource: WebsiteCategory[] = [];
    isLoading: boolean = true;
    pkWebSiteProd_Category: number = 0;
    id: number = 0;
    selectedQuantity: number = 1;
    selectedItems: WebsiteCategory[] = [];
    dataSourceitemoffers: any[] = []; // Initialize as empty array
    dataSourceitemseller: any[] = []; // Initialize as empty array
    dataSourceitemSeller: any;
dataSourceItemSellerImages: any;



    constructor(
      private navCtrl: NavController,
      private mainService: MainService,
      private route: ActivatedRoute,
      private router: Router,
      private loadingCtrl: LoadingController,
      public cartService: CartService
    ) { }

    ngOnInit() {
      const navigation = this.router.getCurrentNavigation();
      if (navigation && navigation.extras && navigation.extras.state) {
        // Navigation state is present
        const state = navigation.extras.state;
        console.log('Navigation state:', state); 
        this.pkWebSiteProd_Category = state['pkWebSiteProd_Category'];
        this.id = state['id']; // Retrieve the id from the navigation state
        this.dataSourceitemoffers = state['dataSourceitemoffers'] || [];
        this.dataSourceitemseller = state['dataSourceitemseller'] || [];
        
        if (this.pkWebSiteProd_Category && this.id) {
          // Parameters are present in the navigation state, proceed with loading data
          this.presentLoading();
          this.WebSite_Product_Select_FkProdCate();
        } else {
          // Handle the case where either pkWebSiteProd_Category or id is missing
          console.error('pkWebSiteProd_Category or id parameter is missing in navigation state!');
        }
      } else {
        // No navigation state found, handle the error
        console.error('Navigation state is missing!');
      }
    }
    
  
    async presentLoading() {
      const loading = await this.loadingCtrl.create({
        message: 'Loading...',
        duration: 1000
      });
      await loading.present();
    } 
    WebSite_Product_Select_FkProdCate() {
      this.MoObj.FkWebsite_Prod_Category = this.pkWebSiteProd_Category;
      this.MoObj.id = this.id;
      this.MoObj.Pid = "ce55d902-f8d4-4a58-a836-dd52eab7feb5";
      this.mainService.TwoMethod(this.MoObj).then((value: any) => {
        this.ApiResult = value;
        this.dataSource = value.table;
    
        // Filter dataSource to show only the item with the matching id
        if (this.id) {
          this.dataSource = this.dataSource.filter(item => item.id === this.id);
        }
      });
    }
    

    WebSite_Product_Soffer() {
      var MoObj: any = {}
      MoObj.Pid = "7241f258-0de8-41bf-9753-00bfc7a179ef";
      this.mainService.TwoMethod(MoObj).then((value: any) => {
        this.dataSourceitemoffers = value && value.table ? value.table : [];
        console.log(this.dataSourceitemoffers); // Assign an empty array if value or value.table is undefined
      });
    }

    WebSite_Product_BestSeller() {
      var MoObj: any = {}
      MoObj.Pid = "c2c687c1-65d6-4bda-b954-9b4111d52f06"; // Replace "best_sellers_endpoint_id" with the actual ID for best sellers endpoint
      this.mainService.TwoMethod(MoObj).then((value: any) => {
        this.dataSourceitemSeller = value && value.table ? value.table : []; // Assign an empty array if value or value.table is undefined
        console.log(this.dataSourceitemSeller);
      });
    }
    buyNow(selectedItem: WebsiteCategory) {
      const orderDetailsItem = [{ "PID": selectedItem.id, "Quantity": this.selectedQuantity }];
      
      console.log('Selected Item:', selectedItem);
      console.log('Selected Quantity:', this.selectedQuantity);
      console.log('Order Details Item:', orderDetailsItem);
      
      // Navigate to the buy-now page and pass the order details
      this.router.navigate(['buy-now'], {
        state: {
          productDetails: selectedItem,
          quantity: this.selectedQuantity,
          orderDetailsItem: orderDetailsItem // Include orderDetailsItem here
        }
      });
    }
    
    

    async addToCart(item: WebsiteCategory) {
      console.log('Adding item to cart:', item); // Log the item being added to the cart
      await this.cartService.addToCart(item, this.selectedQuantity); // Pass the selected quantity to addToCart method
      console.log('Selected items:', this.cartService.getSelectedItems()); // Log the updated selected items array
    
      // Retrieve the username from local storage
      const username = localStorage.getItem('username');
    
      // If username is available, associate cart items with the user
      if (username) {
        this.cartService.associateCartWithUser(username);
      }
    
      // Navigate to the cart page
      this.router.navigate(['/add-to-cart']);
    }
    
    

    
    increaseQuantity() {
      this.selectedQuantity++;
    }
    
    decreaseQuantity() {
      if (this.selectedQuantity > 1) {
        this.selectedQuantity--;
      }
    }
    getCartItemCount(): number {
      return this.cartService.getSelectedItems().length;
    }
    myaccount(){
      this.router.navigate(['/myaccount'])
    }
    goToCartPage(){
      this.router.navigate(['/add-to-cart'])
    }
  }