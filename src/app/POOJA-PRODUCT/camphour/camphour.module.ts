import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamphourPageRoutingModule } from './camphour-routing.module';

import { CamphourPage } from './camphour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamphourPageRoutingModule
  ],
  declarations: [CamphourPage]
})
export class CamphourPageModule {}
