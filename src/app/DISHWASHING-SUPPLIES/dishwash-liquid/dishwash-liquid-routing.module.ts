import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DishwashLiquidPage } from './dishwash-liquid.page';

const routes: Routes = [
  {
    path: '',
    component: DishwashLiquidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DishwashLiquidPageRoutingModule {}
