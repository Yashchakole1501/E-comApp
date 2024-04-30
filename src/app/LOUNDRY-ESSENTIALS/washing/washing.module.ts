import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WashingPageRoutingModule } from './washing-routing.module';

import { WashingPage } from './washing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WashingPageRoutingModule
  ],
  declarations: [WashingPage]
})
export class WashingPageModule {}
