import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamphourPage } from './camphour.page';

const routes: Routes = [
  {
    path: '',
    component: CamphourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamphourPageRoutingModule {}
