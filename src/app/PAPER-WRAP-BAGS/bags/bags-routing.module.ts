import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BagsPage } from './bags.page';

const routes: Routes = [
  {
    path: '',
    component: BagsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BagsPageRoutingModule {}
