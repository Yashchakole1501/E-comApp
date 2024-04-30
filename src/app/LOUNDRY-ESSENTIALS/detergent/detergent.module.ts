import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetergentPageRoutingModule } from './detergent-routing.module';

import { DetergentPage } from './detergent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetergentPageRoutingModule
  ],
  declarations: [DetergentPage]
})
export class DetergentPageModule {}
