import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndoorPage } from './indoor.page';

const routes: Routes = [
  {
    path: '',
    component: IndoorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndoorPageRoutingModule {}
