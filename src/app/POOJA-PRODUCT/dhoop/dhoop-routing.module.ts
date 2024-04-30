import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DhoopPage } from './dhoop.page';

const routes: Routes = [
  {
    path: '',
    component: DhoopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DhoopPageRoutingModule {}
