import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DishwashingPageRoutingModule } from './dishwashing-routing.module';

import { DishwashingPage } from './dishwashing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DishwashingPageRoutingModule
  ],
  declarations: [DishwashingPage]
})
export class DishwashingPageModule {}
