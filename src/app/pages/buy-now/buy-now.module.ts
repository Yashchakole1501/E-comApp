import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { BuyNowPageRoutingModule } from './buy-now-routing.module';
import { BuyNowPage } from './buy-now.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyNowPageRoutingModule,
    HttpClientModule
  ],
  declarations: [BuyNowPage],
  providers: [MainService]
})
export class BuyNowPageModule {}
