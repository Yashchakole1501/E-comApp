import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaperWrapBagsPage } from './paper-wrap-bags.page';

const routes: Routes = [
  {
    path: '',
    component: PaperWrapBagsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaperWrapBagsPageRoutingModule {}
