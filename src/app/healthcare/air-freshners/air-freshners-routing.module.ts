import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AirFreshnersPage } from './air-freshners.page';

const routes: Routes = [
  {
    path: '',
    component: AirFreshnersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirFreshnersPageRoutingModule {}
