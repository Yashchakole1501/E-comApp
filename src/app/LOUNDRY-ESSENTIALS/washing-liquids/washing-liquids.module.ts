import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WashingLiquidsPageRoutingModule } from './washing-liquids-routing.module';

import { WashingLiquidsPage } from './washing-liquids.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WashingLiquidsPageRoutingModule
  ],
  declarations: [WashingLiquidsPage]
})
export class WashingLiquidsPageModule {}
