import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewservicesPage } from './viewservices.page';

const routes: Routes = [
  {
    path: '',
    component: ViewservicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewservicesPageRoutingModule {}
