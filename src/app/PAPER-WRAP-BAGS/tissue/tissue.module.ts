import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TissuePageRoutingModule } from './tissue-routing.module';

import { TissuePage } from './tissue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TissuePageRoutingModule
  ],
  declarations: [TissuePage]
})
export class TissuePageModule {}
