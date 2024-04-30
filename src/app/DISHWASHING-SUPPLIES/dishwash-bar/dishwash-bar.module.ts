import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DishwashBarPageRoutingModule } from './dishwash-bar-routing.module';

import { DishwashBarPage } from './dishwash-bar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DishwashBarPageRoutingModule
  ],
  declarations: [DishwashBarPage]
})
export class DishwashBarPageModule {}
