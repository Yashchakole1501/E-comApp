import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoojaPage } from './pooja.page';

const routes: Routes = [
  {
    path: '',
    component: PoojaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoojaPageRoutingModule {}
