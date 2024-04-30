import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, LoadingController, MenuController, AlertController, Platform } from '@ionic/angular';
import { MainService } from 'src/app/services/main.service';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { WebsitecategoryService } from '../websitecategory.service';
import { AuthorizationService } from '../services/auth.service';


interface WebsiteCategory {

  productName:string;
  pkWebSite_Category: number;
  categoryName: string;
  categoryDisc: string;
  categoryImg: string;
 id:number;
 pkWebSiteProd_Category: number;
 fkWebsite_Prod_Category: number;
 code:string;
 size: number
 brandName:string;
 mrp: number;
 discount: number;
 totalPrice:number;
 colour: string;
 material: string;
 recommendedUseFor: string;
 quantity:number; 
 weight: number;
 dimensions: number;

}



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  showSearchBar: boolean = false;
  MoObj: any = {};
  ApiResult: any;
  dataSource: any;
  isLoading: boolean = true; // Initially set to true to show loading indicator
  ApiResult1:any;
  dataSourceitemoffers: any;  
  dataSourceitemSeller: any;
  filteredDataSource: any;
searchTerm: any;
isLoggedIn =false;
  

  constructor(
    private navCtrl: NavController,
    private mainService: MainService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private menuCtrl: MenuController,
    private alertController: AlertController,
    public cartService: CartService,
    private platform: Platform,
    private authService: AuthorizationService
    
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.presentLoading(); // Show loading indicator
    this.WebSite_Category_Select_List_ByPk();
    this.WebSite_Product_Soffer();
    this.WebSite_Product_BestSeller();
   // Subscribe to back button events
this.platform.backButton.subscribeWithPriority(10, () => {
  // Check if the current URL is the home page
  if (this.router.url === '/home') {
    // If on home page, exit the app
    (navigator as any).app.exitApp(); // Cast navigator to any and access 'app'
  } else {
    // If not on home page, navigate back
    this.navCtrl.back();
  }
});
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 2000, // Adjust duration as needed
    });
    await loading.present();
  }

  // Method to filter items based on search term
  filterItems(event: any) {
    // Get the search term from the event
    const searchTerm = event.target.value.toLowerCase().trim();

    // If search term is empty, show all items
    if (!searchTerm || searchTerm === '') {
      this.filteredDataSource = this.dataSource;
      return;
    }

    // Filter the data source based on the search term
    this.filteredDataSource = this.dataSource.filter((item: { title: string; }) => {
      // Customize this condition based on your data structure
      // Here, we assume each item has a 'title' property to search against
      return item.title.toLowerCase().includes(searchTerm);
    });
  }
 

  goToCartPage() {
    this.navCtrl.navigateForward('/add-to-cart');
  }

 

  WebSite_Category_Select_List_ByPk() {
    this.MoObj.PkWebSite_Category = 0;
    this.MoObj.Pid = '7c7ae5fa-dd10-46c7-91ee-cb9ea508317c';
    this.mainService.TwoMethod(this.MoObj).then((value: any) => {
      this.ApiResult = value;
      this.dataSource = this.ApiResult.table.map((item: WebsiteCategory) => ({
        pkWebSite_Category: item.pkWebSite_Category,
        title: item.categoryName,
        imageUrl: `https://oceansofttech.net/_All_WebsiteImages/ECommK/${item.categoryImg}`,
      }));
      this.isLoading = false; // Data loaded, hide loading indicator
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
  
  
  navigateToDetails(item: WebsiteCategory) {
    localStorage.setItem(
      'selectedCategory',
      JSON.stringify(item.pkWebSite_Category)
    );
    this.router.navigate(['/details']);
  }

  
 
  
  myaccount() {
    this.router.navigateByUrl('/myaccount');
  }
  navigateToProductDetails(item: WebsiteCategory) {
    if (item && item.id) {
      this.router.navigate(['/prodinfo'], {
        state: {
          productDetails: item,
          dataSourceitemoffers: [item], // Pass only the clicked item
          id: item.id // Pass the id of the selected item
        }
      });
    }
  }
  navigateToProductseller(item:WebsiteCategory){
    if (item && item.id) {
      this.router.navigate(['/prodinfo'], {
        state: {
          productDetails: item,
          dataSourceitemseller: [item], // Pass only the clicked item
          id: item.id // Pass the id of the selected item
        }
      });
    } 
  }

  }
