import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GomutraPageRoutingModule } from './gomutra-routing.module';

import { GomutraPage } from './gomutra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GomutraPageRoutingModule
  ],
  declarations: [GomutraPage]
})
export class GomutraPageModule {}
