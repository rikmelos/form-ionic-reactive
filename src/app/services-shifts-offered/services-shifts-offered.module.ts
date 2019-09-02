import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServicesShiftsOfferedPage } from './services-shifts-offered.page';
import { BdbHeaderComponent } from '../../components/bdb-header/bdb-header.component';
import {BdbSearchOfficeComponent} from '../../components/bdb-search-office/bdb-search-office.component';
import {BdbServicesOptionComponent} from '../../components/bdb-services-option/bdb-services-option.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesShiftsOfferedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ServicesShiftsOfferedPage,
    BdbHeaderComponent,
    BdbSearchOfficeComponent,
    BdbServicesOptionComponent
  ]
})
export class ServicesShiftsOfferedPageModule {}
