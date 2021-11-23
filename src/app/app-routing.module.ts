import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AllServicesComponent } from './all-services/all-services.component';
import { InformationServiceComponent } from './information-service/information-service.component';

import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path: 'services', component: AllServicesComponent},
  {path: 'information', component: InformationServiceComponent},
  {path: '**', pathMatch: 'full', redirectTo:'viewservices' },
  {
    path: 'viewservices',
    loadChildren: () => import('./viewservices/viewservices.module').then( m => m.ViewservicesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    BrowserModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
