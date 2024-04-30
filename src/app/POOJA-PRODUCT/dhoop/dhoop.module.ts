import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DhoopPageRoutingModule } from './dhoop-routing.module';

import { DhoopPage } from './dhoop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DhoopPageRoutingModule
  ],
  declarations: [DhoopPage]
})
export class DhoopPageModule {}
