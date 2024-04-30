import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TissuePage } from './tissue.page';

const routes: Routes = [
  {
    path: '',
    component: TissuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TissuePageRoutingModule {}
