import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetergentPage } from './detergent.page';

const routes: Routes = [
  {
    path: '',
    component: DetergentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetergentPageRoutingModule {}
