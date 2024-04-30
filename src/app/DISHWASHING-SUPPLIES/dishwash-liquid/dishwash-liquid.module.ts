import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DishwashLiquidPageRoutingModule } from './dishwash-liquid-routing.module';

import { DishwashLiquidPage } from './dishwash-liquid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DishwashLiquidPageRoutingModule
  ],
  declarations: [DishwashLiquidPage]
})
export class DishwashLiquidPageModule {}
