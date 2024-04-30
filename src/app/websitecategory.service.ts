import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebsitecategoryService {

  constructor() { }
}

export interface WebsiteCategory {
  imgPath11: any;
imgPath21: any;
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
   // Your existing properties
   selected: boolean; // New property to track selection

}