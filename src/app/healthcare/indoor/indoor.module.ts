import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndoorPageRoutingModule } from './indoor-routing.module';

import { IndoorPage } from './indoor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndoorPageRoutingModule
  ],
  declarations: [IndoorPage]
})
export class IndoorPageModule {}
