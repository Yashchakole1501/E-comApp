import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegisterPage } from './pages/register/register.page';
import { AddToCartPage } from './pages/add-to-cart/add-to-cart.page';



const routes: Routes = [
  {
    path: '', // Empty path for default route
    redirectTo: 'home', // Redirect to home page
    pathMatch: 'full' // Match the full URL path
  },
   { path: 'add-to-cart', component: AddToCartPage },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'login', // Define the login route
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'myaccount',
    loadChildren: () => import('./pages/myaccount/myaccount.module').then( m => m.MyaccountPageModule)
  },
  {
    path: 'allcategories',
    loadChildren: () => import('./pages/allcategories/allcategories.module').then( m => m.AllcategoriesPageModule)
  },
  {
    path: 'myorders',
    loadChildren: () => import('./pages/myorders/myorders.module').then( m => m.MyordersPageModule)
  },
  {
    path: 'mycart',
    loadChildren: () => import('./pages/mycart/mycart.module').then( m => m.MycartPageModule)
  },
  {
    path: 'mynotify',
    loadChildren: () => import('./pages/mynotify/mynotify.module').then( m => m.MynotifyPageModule)
  },
  {
    path: 'offerzone',
    loadChildren: () => import('./pages/offerzone/offerzone.module').then( m => m.OfferzonePageModule)
  },
  {
    path: 'coupons',
    loadChildren: () => import('./pages/coupons/coupons.module').then( m => m.CouponsPageModule)
  },

  {
    path: 'healthcare',
    loadChildren: () => import('./pages/healthcare/healthcare.module').then( m => m.HealthcarePageModule)
  },
  {
    path: 'air-freshners/:id',
    loadChildren: () => import('./healthcare/air-freshners/air-freshners.module').then( m => m.AirFreshnersPageModule)
  },
  {
    path: 'loundry/:id',
    loadChildren: () => import('./healthcare/loundry/loundry.module').then( m => m.LoundryPageModule)
  },
  {
    path: 'dishwashing/:id',
    loadChildren: () => import('./healthcare/dishwashing/dishwashing.module').then( m => m.DishwashingPageModule)
  },
  {
    path: 'indoor/:id',
    loadChildren: () => import('./healthcare/indoor/indoor.module').then( m => m.IndoorPageModule)
  },
  {
    path: 'paper-wrap-bags/:id',
    loadChildren: () => import('./healthcare/paper-wrap-bags/paper-wrap-bags.module').then( m => m.PaperWrapBagsPageModule)
  },
  {
    path: 'pooja/:id',
    loadChildren: () => import('./healthcare/pooja/pooja.module').then( m => m.PoojaPageModule)
  },
  {
    path: 'napthalene',
    loadChildren: () => import('./AIR-FRESHNERS/napthalene/napthalene.module').then( m => m.NapthalenePageModule)
  },
  {
    path: 'room',
    loadChildren: () => import('./AIR-FRESHNERS/room/room.module').then( m => m.RoomPageModule)
  },
  {
    path: 'washing',
    loadChildren: () => import('./LOUNDRY-ESSENTIALS/washing/washing.module').then( m => m.WashingPageModule)
  },
  {
    path: 'detergent',
    loadChildren: () => import('./LOUNDRY-ESSENTIALS/detergent/detergent.module').then( m => m.DetergentPageModule)
  },
 
  {
    path: 'ant',
    loadChildren: () => import('./INDOOR/ant/ant.module').then( m => m.AntPageModule)
  },
  {
    path: 'bleaching',
    loadChildren: () => import('./INDOOR/bleaching/bleaching.module').then( m => m.BleachingPageModule)
  },
  {
    path: 'tissue',
    loadChildren: () => import('./PAPER-WRAP-BAGS/tissue/tissue.module').then( m => m.TissuePageModule)
  },
  {
    path: 'bags',
    loadChildren: () => import('./PAPER-WRAP-BAGS/bags/bags.module').then( m => m.BagsPageModule)
  },
  {
    path: 'jasmine',
    loadChildren: () => import('./POOJA-PRODUCT/jasmine/jasmine.module').then( m => m.JasminePageModule)
  },
  {
    path: 'dhoop',
    loadChildren: () => import('./POOJA-PRODUCT/dhoop/dhoop.module').then( m => m.DhoopPageModule)
  },
  {
    path: 'camphour',
    loadChildren: () => import('./POOJA-PRODUCT/camphour/camphour.module').then( m => m.CamphourPageModule)
  },
  {
    path: 'rose',
    loadChildren: () => import('./POOJA-PRODUCT/rose/rose.module').then( m => m.RosePageModule)
  },
  {
    path: 'gangajal',
    loadChildren: () => import('./POOJA-PRODUCT/gangajal/gangajal.module').then( m => m.GangajalPageModule)
  },
  {
    path: 'gomutra',
    loadChildren: () => import('./POOJA-PRODUCT/gomutra/gomutra.module').then( m => m.GomutraPageModule)
  },
 
  {
    path: 'dishwash-bar',
    loadChildren: () => import('./DISHWASHING-SUPPLIES/dishwash-bar/dishwash-bar.module').then( m => m.DishwashBarPageModule)
  },
  {
    path: 'dishwash-liquid',
    loadChildren: () => import('./DISHWASHING-SUPPLIES/dishwash-liquid/dishwash-liquid.module').then( m => m.DishwashLiquidPageModule)
  },
  {
    path: 'add-to-cart',
    loadChildren: () => import('./pages/add-to-cart/add-to-cart.module').then( m => m.AddToCartPageModule)
  },
  {
    path: 'washing-liquids',
    loadChildren: () => import('./LOUNDRY-ESSENTIALS/washing-liquids/washing-liquids.module').then( m => m.WashingLiquidsPageModule)
  },
  {
    path: 'buy-now',
    loadChildren: () => import('./pages/buy-now/buy-now.module').then( m => m.BuyNowPageModule)
  },
 

  {
    path: 'household',
    loadChildren: () => import('./pages/household/household.module').then( m => m.HouseholdPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/SUB CATEGORY/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'product', // Define a parameter ':id'
    loadChildren: () => import('./pages/PRODUCT CATEGORY/product.module').then( m => m.PRODUCTPageModule)
  },
  {
    path: 'proddetail',
    loadChildren: () => import('./pages/SUB PRODUCT CATEGORY/proddetail.module').then( m => m.ProddetailPageModule)
  },
  {
    path: 'prodinfo',
    loadChildren: () => import('./pages/PRODUCTUDT INFO/prodinfo.module').then( m => m.ProdinfoPageModule)
  },

  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
