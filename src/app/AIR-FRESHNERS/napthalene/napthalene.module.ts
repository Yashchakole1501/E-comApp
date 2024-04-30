import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NapthalenePageRoutingModule } from './napthalene-routing.module';

import { NapthalenePage } from './napthalene.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NapthalenePageRoutingModule
  ],
  declarations: [NapthalenePage]
})
export class NapthalenePageModule {}
