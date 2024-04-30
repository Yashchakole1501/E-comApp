import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoundryPageRoutingModule } from './loundry-routing.module';

import { LoundryPage } from './loundry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoundryPageRoutingModule
  ],
  declarations: [LoundryPage]
})
export class LoundryPageModule {}
