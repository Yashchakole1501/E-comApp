import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfferzonePage } from './offerzone.page';

const routes: Routes = [
  {
    path: '',
    component: OfferzonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferzonePageRoutingModule {}
