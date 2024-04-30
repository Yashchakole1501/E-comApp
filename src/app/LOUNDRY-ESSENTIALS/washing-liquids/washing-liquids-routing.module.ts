import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WashingLiquidsPage } from './washing-liquids.page';

const routes: Routes = [
  {
    path: '',
    component: WashingLiquidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WashingLiquidsPageRoutingModule {}
