import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BleachingPageRoutingModule } from './bleaching-routing.module';

import { BleachingPage } from './bleaching.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BleachingPageRoutingModule
  ],
  declarations: [BleachingPage]
})
export class BleachingPageModule {}
