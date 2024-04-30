import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AirFreshnersPageRoutingModule } from './air-freshners-routing.module';
import { AirFreshnersPage } from './air-freshners.page';
import { HttpClientModule } from '@angular/common/http';
import { MainService } from 'src/app/services/main.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AirFreshnersPageRoutingModule,
    HttpClientModule
  ],
  declarations: [AirFreshnersPage],
  providers: [MainService]
})
export class AirFreshnersPageModule {}
