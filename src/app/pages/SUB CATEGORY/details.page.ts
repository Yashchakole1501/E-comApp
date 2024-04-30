  import { Component, OnInit } from '@angular/core';
  import { NavController, LoadingController } from '@ionic/angular'; 
  import { MainService } from 'src/app/services/main.service';
  import { ActivatedRoute, Router } from '@angular/router';
  import { CartService } from 'src/app/service/cart.service';

  interface WebsiteCategory {
    pkWebSiteSub_Category: number;
    PkWebSiteSub_Category: number;
    FkWebSiteSub_Category: number;
    PkWebsiteProd_category: number;
    subCategory: string;
    categoryImg: string;
    isActiveFlag: number;
    folderPath: string;
    id: number;
  }

  @Component({
    selector: 'app-details',
    templateUrl: './details.page.html',
    styleUrls: ['./details.page.scss'],
  })
  export class DetailsPage implements OnInit {
    MoObj: any = {};
    ApiResult: any;
    dataSource: any;
    pkWebSite_Category: number = 0;
    isLoading: boolean = true; // Initially set to true to show loading indicator



    constructor(
      private navCtrl: NavController, 
      private mainService: MainService,
      private route: ActivatedRoute,
      private router: Router,
      private loadingCtrl: LoadingController,
      public cartService: CartService
    ) {}

    ngOnInit() {
      this.presentLoading(); // Show loading indicator
      const storedCategory = localStorage.getItem('selectedCategory');
      this.pkWebSite_Category = storedCategory ? JSON.parse(storedCategory) : 0; // Default to 0 if null
      this.WebSite_Sub_Category_Select_FkWebSite_Category();
    }

    async presentLoading() {
      const loading = await this.loadingCtrl.create({
        message: 'Loading...',
        duration: 1000 // Adjust duration as needed
      });
      await loading.present();
    }

    WebSite_Sub_Category_Select_FkWebSite_Category() {
      this.MoObj.FkWebSite_Category = this.pkWebSite_Category; 
      this.MoObj.Pid = "cac94919-0082-444c-9747-065e98f48a65";
      this.mainService.TwoMethod(this.MoObj).then((value: any) => {
        this.ApiResult = value;
        const pathToAdd = "https://oceansofttech.net/_All_WebsiteImages/ECommK/"; 
        this.dataSource = this.ApiResult.table.map((item: WebsiteCategory) => ({
          title: item.subCategory,
          imageUrl: `${pathToAdd}${item.categoryImg}`,
          pkWebSiteSub_Category: item.id // Use id as pkWebSiteSub_Category
        }));
        this.isLoading = false; // Data loaded, hide loading indicator
        console.log(this.ApiResult);
      });
    }

    navigateToDetails(item: WebsiteCategory) {
  localStorage.setItem('selectedSubCategory', JSON.stringify(item.pkWebSiteSub_Category));
  this.router.navigate(['/product'], { 
    queryParams: { 
      pkWebSiteSub_Category: item.pkWebSiteSub_Category,
      id: item.id // Include the id parameter
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
