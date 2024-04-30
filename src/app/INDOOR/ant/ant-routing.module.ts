import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntPage } from './ant.page';

const routes: Routes = [
  {
    path: '',
    component: AntPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntPageRoutingModule {}
