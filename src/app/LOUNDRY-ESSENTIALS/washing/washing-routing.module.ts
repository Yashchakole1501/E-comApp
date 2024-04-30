import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WashingPage } from './washing.page';

const routes: Routes = [
  {
    path: '',
    component: WashingPage
  },
  {
    path: 'washing',
    loadChildren: () => import('../../LOUNDRY-ESSENTIALS/washing/washing.module').then( m => m.WashingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WashingPageRoutingModule {}
