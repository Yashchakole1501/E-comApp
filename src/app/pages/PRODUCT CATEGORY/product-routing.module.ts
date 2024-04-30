import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PRODUCTPage } from './product.page';

const routes: Routes = [
  {
    path: '',
    component: PRODUCTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PRODUCTPageRoutingModule {}
  