import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdinfoPage } from './prodinfo.page';

const routes: Routes = [
  {
    path: '',
    component: ProdinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdinfoPageRoutingModule {}
