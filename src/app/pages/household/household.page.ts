  import { Component, OnInit } from '@angular/core';
  import { NavController } from '@ionic/angular'; // Import NavController for navigation
  import { MainService } from 'src/app/services/main.service';

  // Define an interface to represent the structure of website category
  interface WebsiteCategory {
    FkWebSite_Category: number;
    subCategory: string;
    SubCatImges: string;
    isActiveFlag: number;
    insertedDate: string;
    folderPath: string;
    id:number;
    routerlink:string;
    PkWebSiteSub_Category:string
  }

  @Component({
    selector: 'app-household',
    templateUrl: './household.page.html',
    styleUrls: ['./household.page.scss'],
  })
  export class HouseholdPage implements OnInit {
    MoObj: any = {};
    ApiResult: any;
    dataSource: any;

    constructor(private navCtrl: NavController, private mainService: MainService) {}

    ngOnInit() {
      this.WebSite_Sub_Category_Select_FkWebSite_Category();
    }

    WebSite_Sub_Category_Select_FkWebSite_Category() {
      this.MoObj.FkWebSite_Category =""; 
      this.MoObj.Pid = "e38668ab-2a54-4d33-ada6-e23b8e060e8f";
      this.mainService.TwoMethod(this.MoObj).then((value: any) => {
        this.ApiResult = value;
        const pathToAdd = "https://oceansofttech.net/_All_WebsiteImages/ECommK/"; // Add your desired path here
        this.dataSource = this.ApiResult.table.map((item: WebsiteCategory) => ({
          title: item.subCategory,
          imageUrl: `${pathToAdd}${item.SubCatImges}`
        }));
          console.log(this.ApiResult);
        });
    }
  }
