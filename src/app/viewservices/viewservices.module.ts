import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { IonicModule } from '@ionic/angular';

import { ViewservicesPageRoutingModule } from './viewservices-routing.module';

import { ViewservicesPage } from './viewservices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewservicesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ViewservicesPage]
})
export class ViewservicesPageModule {}
