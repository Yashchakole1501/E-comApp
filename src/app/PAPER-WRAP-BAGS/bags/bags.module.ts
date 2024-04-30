import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BagsPageRoutingModule } from './bags-routing.module';

import { BagsPage } from './bags.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BagsPageRoutingModule
  ],
  declarations: [BagsPage]
})
export class BagsPageModule {}
