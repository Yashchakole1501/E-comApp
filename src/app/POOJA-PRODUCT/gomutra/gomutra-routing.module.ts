import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GomutraPage } from './gomutra.page';

const routes: Routes = [
  {
    path: '',
    component: GomutraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GomutraPageRoutingModule {}
