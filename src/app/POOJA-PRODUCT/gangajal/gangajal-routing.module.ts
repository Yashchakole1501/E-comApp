import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GangajalPage } from './gangajal.page';

const routes: Routes = [
  {
    path: '',
    component: GangajalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GangajalPageRoutingModule {}
