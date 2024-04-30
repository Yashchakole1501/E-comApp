import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProddetailPageRoutingModule } from './proddetail-routing.module';
import { MainService } from 'src/app/services/main.service';
import { HttpClientModule } from '@angular/common/http';
import { ProddetailPage } from './proddetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProddetailPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ProddetailPage],
  providers:[MainService]
})
export class ProddetailPageModule {}
