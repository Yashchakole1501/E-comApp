import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RosePageRoutingModule } from './rose-routing.module';

import { RosePage } from './rose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RosePageRoutingModule
  ],
  declarations: [RosePage]
})
export class RosePageModule {}
