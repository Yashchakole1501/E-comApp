import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular'; 
import { MainService } from 'src/app/services/main.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
interface WebsiteCategory {

  FkWebSiteSub_Category: number;
  pkWebSiteProd_Category: number;
  prodCategory: string;
  prodCateImg: string;
  isActiveFlag: number;
  folderPath: string;
  PkWebSiteSub_Category: number;
  id: number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class PRODUCTPage implements OnInit {
  MoObj: any = {
    Pid: "f0162c35-f6e3-4e62-936d-92b7d4d43c3b", // Setting the Pid parameter
    IsCipher: "0",
    ApplicationId: "1020",
  };
  ApiResult: any;
  dataSource: any;

  isLoading: boolean = true; // Initially set to true to show loading indicator
  pkWebSiteSub_Category: any;

  constructor(
    private navCtrl: NavController, 
    private mainService: MainService,
    private route: ActivatedRoute,
    private router: Router,
    private loadingCtrl: LoadingController,
    public cartService: CartService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const pkWebSiteSub_Category = params['pkWebSiteSub_Category'];
      if (pkWebSiteSub_Category) {
        this.pkWebSiteSub_Category = parseInt(pkWebSiteSub_Category);
        console.log('pkWebSiteSub_Category:', this.pkWebSiteSub_Category); // Add this line to check the value
        this.presentLoading(); // Show loading indicator
        this.WebSite_Prod_Category_Select_FkWebSiteSub_Category();
      } else {
        console.error('pkWebSiteSub_Category parameter is missing!');
      }
    });
  }
  

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 2000 // Adjust duration as needed
    });
    await loading.present();
  }

  WebSite_Prod_Category_Select_FkWebSiteSub_Category() {
    this.MoObj.FkWebSiteSub_Category = this.pkWebSiteSub_Category; 
    this.mainService.TwoMethod(this.MoObj).then((value: any) => {
      this.ApiResult = value;
      const pathToAdd = "https://oceansofttech.net/_All_WebsiteImages/ECommK/"; 
      this.dataSource = this.ApiResult.table.map((item: WebsiteCategory) => ({
        title: item.prodCategory,
        imageUrl: `${pathToAdd}${item.prodCateImg}`,
        PkWebSiteSub_category: item.PkWebSiteSub_Category, // Adding PkWebSiteSub_category to dataSource
        pkWebSiteProd_Category: item.id // Make pkWebsiteProd_category equal to the id number
      }));
      
      this.isLoading = false; // Data loaded, hide loading indicator
      console.log(this.ApiResult);
    });
  }
  navigateToDetails(item: WebsiteCategory) {
    // Save selected product category ID to local storage
    localStorage.setItem('selectedProdCategory', JSON.stringify(item.pkWebSiteProd_Category));
    
    // Navigate to proddetail page with both pkWebSiteProd_Category and id as query parameters
    this.router.navigate(['/proddetail'], {   
      queryParams: { 
        pkWebSiteProd_Category: item.pkWebSiteProd_Category,
        id: item.id
      } 
    });
  }
  myaccount(){
    this.router.navigate(['/myaccount'])
  }
  goToCartPage(){
    this.router.navigate(['/add-to-cart'])
  }
}