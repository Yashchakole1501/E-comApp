import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { MainService } from 'src/app/services/main.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
interface WebsiteCategory {
  PkWebSite_Product:number;
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
  // code: string;
  // size: string;
  mrp: number;
  // dimensions: any;
  // discount: number;
  // totalPrice: number;
  // colour: string;
  // material: string;
  // recommendedUseFor: string;
  // quantity: number;
  // weight: number;
  folderPath1: string;
  folderPath2: string;
}

@Component({
  selector: 'app-proddetail',
  templateUrl: './proddetail.page.html',
  styleUrls: ['./proddetail.page.scss'],
})
export class ProddetailPage implements OnInit {
  MoObj: any = {};
  ApiResult: any;
  dataSource: any;
  isLoading: boolean = true;
  pkWebSiteProd_Category: any; // Initialize pkWebSiteProd_Category

  constructor(
    private navCtrl: NavController,
    private mainService: MainService,
    private route: ActivatedRoute,
    private router: Router,
    private loadingCtrl: LoadingController,
    public cartService: CartService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const pkWebSiteProd_Category = params['pkWebSiteProd_Category'];
      if (pkWebSiteProd_Category) {
        this.pkWebSiteProd_Category = parseInt(pkWebSiteProd_Category);
        console.log('pkWebSiteProd_Category:', this.pkWebSiteProd_Category);
        this.presentLoading();
        this.WebSite_Product_Select_FkProdCate();
      } else {
        console.error('pkWebSiteProd_Category parameter is missing!');
      }
    });
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
    this.MoObj.Pid = "ce55d902-f8d4-4a58-a836-dd52eab7feb5";
    console.log('Request Parameters:', this.MoObj);
    this.mainService.TwoMethod(this.MoObj).then((value: any) => {
      this.ApiResult = value;
      this.dataSource = this.ApiResult.table;
      this.isLoading = false;
      console.log(this.ApiResult);
    });
  }

  // buyNow() {
  //   this.router.navigate(['/buy-now'])
  // }

  // addToCart() {
  //   this.router.navigate(['/add-to-cart'], {
  //     queryParams: {
  //       productInfo: JSON.stringify(this.dataSource)
  //     }
  //   });
  // }
  
  navigatetoinformation(item: WebsiteCategory) {
    if (item.id && this.pkWebSiteProd_Category) {
      this.router.navigate(['prodinfo'], { 
        state: { 
          id: item.id,
          pkWebSiteProd_Category: this.pkWebSiteProd_Category
        } 
      });
    } else {
      console.error('id or pkWebSiteProd_Category parameter is missing!');
    }
  }
  
  myaccount(){
    this.router.navigate(['/myaccount'])
  }
  goToCartPage(){
    this.router.navigate(['/add-to-cart'])
  }
}  