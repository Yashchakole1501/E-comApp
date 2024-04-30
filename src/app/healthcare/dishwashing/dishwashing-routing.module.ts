import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DishwashingPage } from './dishwashing.page';

const routes: Routes = [
  {
    path: '',
    component: DishwashingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DishwashingPageRoutingModule {}
