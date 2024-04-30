import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BleachingPage } from './bleaching.page';

const routes: Routes = [
  {
    path: '',
    component: BleachingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BleachingPageRoutingModule {}
