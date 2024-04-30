import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MynotifyPageRoutingModule } from './mynotify-routing.module';

import { MynotifyPage } from './mynotify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MynotifyPageRoutingModule
  ],
  declarations: [MynotifyPage]
})
export class MynotifyPageModule {}
