import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdinfoPageRoutingModule } from './prodinfo-routing.module';

import { ProdinfoPage } from './prodinfo.page';
import { MainService } from 'src/app/services/main.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdinfoPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ProdinfoPage],
  providers:[MainService]
})
export class ProdinfoPageModule {}
