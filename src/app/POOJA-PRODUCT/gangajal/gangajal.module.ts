import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GangajalPageRoutingModule } from './gangajal-routing.module';

import { GangajalPage } from './gangajal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GangajalPageRoutingModule
  ],
  declarations: [GangajalPage]
})
export class GangajalPageModule {}
