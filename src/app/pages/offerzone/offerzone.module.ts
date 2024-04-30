import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfferzonePageRoutingModule } from './offerzone-routing.module';

import { OfferzonePage } from './offerzone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfferzonePageRoutingModule
  ],
  declarations: [OfferzonePage]
})
export class OfferzonePageModule {}
