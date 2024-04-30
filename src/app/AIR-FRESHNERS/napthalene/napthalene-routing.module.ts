import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NapthalenePage } from './napthalene.page';

const routes: Routes = [
  {
    path: '',
    component: NapthalenePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NapthalenePageRoutingModule {}
