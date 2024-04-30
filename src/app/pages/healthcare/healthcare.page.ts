import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

interface WebsiteCategory {
  FkWebSiteProd_Category: number;
  prodCategory: string;
  prodCateImg: string;
  isActiveFlag: number;
  insertedDate: string;
  folderPath: string;
  id: number;
  routerLink: string;
  imageUrl: string;
  title: string;
  discount: string;
  fkWebSiteSub_Category: number;
}

@Component({
  selector: 'app-healthcare',
  templateUrl: './healthcare.page.html',
  styleUrls: ['./healthcare.page.scss'],
})
export class HealthcarePage implements OnInit {

  MoObj: any = {};
  ApiResult: any;
  dataSource: WebsiteCategory[] = [];

  constructor(
    private navCtrl: NavController,
    private mainService: MainService,
    private router: Router
  ) { }

  ngOnInit() {
    this.WebSite_Prod_Category_Select_FkWebSiteSub_Category();
  }

  WebSite_Prod_Category_Select_FkWebSiteSub_Category() {
    this.MoObj.FkWebSiteProd_Category = "";
    this.MoObj.Pid = "8b95eb25-facd-4dbc-a97a-1c7912651365";
    this.mainService.TwoMethod(this.MoObj).then((value: any) => {
      this.ApiResult = value;
      const pathToAdd = "https://oceansofttech.net/_All_WebsiteImages/ECommK/";
      this.dataSource = this.ApiResult.table.map((item: WebsiteCategory) => ({
        title: item.prodCategory,
        imageUrl: `${pathToAdd}${item.prodCateImg}`,
        routerLink: this.generateRouterLink(item), // Generate router link dynamically
        discount: "Min.30% Off"
      }));
      console.log(this.ApiResult);
    });
  }

  // Function to generate router link dynamically based on item properties
  generateRouterLink(item: WebsiteCategory): string {
    // Customize this logic based on your requirements
    switch (item.prodCategory.toLowerCase()) {
      case 'air freshners':
        return `/air-freshners/${item.id}`;
      case 'dishwashing supplies':
        return `/dishwashing/${item.id}`;
      case 'indoor insect and pest control':
        return `/indoor/${item.id}`;
      case 'loundry essentials':
        return `/loundry/${item.id}`;
      case 'papers wraps bags':
        return `/paper-wrap-bags/${item.id}`;
      case 'pooja products':
        return `/pooja/${item.id}`;
      // Add more cases for other categories as needed
      default:
        return `/default-route/${item.id}`;
    }
  }
  navigateToPage(itemId: number) {
    // Navigate to the desired page with the item's ID
    this.router.navigate(['/air-freshners', itemId]);
  }
}
