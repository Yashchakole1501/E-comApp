import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JasminePage } from './jasmine.page';

const routes: Routes = [
  {
    path: '',
    component: JasminePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JasminePageRoutingModule {}
