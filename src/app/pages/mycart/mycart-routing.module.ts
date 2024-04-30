import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycartPage } from './mycart.page';

const routes: Routes = [
  {
    path: '',
    component: MycartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycartPageRoutingModule {}
