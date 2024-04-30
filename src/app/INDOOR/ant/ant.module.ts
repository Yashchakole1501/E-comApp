import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntPageRoutingModule } from './ant-routing.module';

import { AntPage } from './ant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntPageRoutingModule
  ],
  declarations: [AntPage]
})
export class AntPageModule {}
