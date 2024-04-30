import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoojaPageRoutingModule } from './pooja-routing.module';

import { PoojaPage } from './pooja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoojaPageRoutingModule
  ],
  declarations: [PoojaPage]
})
export class PoojaPageModule {}
