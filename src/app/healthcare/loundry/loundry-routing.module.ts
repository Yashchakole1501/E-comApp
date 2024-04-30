import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoundryPage } from './loundry.page';

const routes: Routes = [
  {
    path: '',
    component: LoundryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoundryPageRoutingModule {}
