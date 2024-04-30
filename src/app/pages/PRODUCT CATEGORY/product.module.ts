import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PRODUCTPageRoutingModule } from './product-routing.module';
import { MainService } from 'src/app/services/main.service';
import { HttpClientModule } from '@angular/common/http';
import { PRODUCTPage } from './product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PRODUCTPageRoutingModule,
    HttpClientModule
  ],
  declarations: [PRODUCTPage],
  providers:[MainService]
})
export class PRODUCTPageModule {}
