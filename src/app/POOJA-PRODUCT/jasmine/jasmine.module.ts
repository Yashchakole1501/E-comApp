import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JasminePageRoutingModule } from './jasmine-routing.module';

import { JasminePage } from './jasmine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JasminePageRoutingModule
  ],
  declarations: [JasminePage]
})
export class JasminePageModule {}
