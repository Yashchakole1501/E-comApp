import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaperWrapBagsPageRoutingModule } from './paper-wrap-bags-routing.module';

import { PaperWrapBagsPage } from './paper-wrap-bags.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaperWrapBagsPageRoutingModule
  ],
  declarations: [PaperWrapBagsPage]
})
export class PaperWrapBagsPageModule {}
