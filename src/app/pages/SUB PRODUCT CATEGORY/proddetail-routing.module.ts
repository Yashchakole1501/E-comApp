import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProddetailPage } from './proddetail.page';

const routes: Routes = [
  {
    path: '',
    component: ProddetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProddetailPageRoutingModule {}
