import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DishwashBarPage } from './dishwash-bar.page';

const routes: Routes = [
  {
    path: '',
    component: DishwashBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DishwashBarPageRoutingModule {}
