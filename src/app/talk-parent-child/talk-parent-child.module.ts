import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TalkParentChildPage } from './talk-parent-child.page';
import {PadreComponent} from '../../components/padre/padre.component';
import {HijoComponent} from '../../components/hijo/hijo.component';

const routes: Routes = [
  {
    path: '',
    component: TalkParentChildPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TalkParentChildPage, PadreComponent, HijoComponent]
})
export class TalkParentChildPageModule {}
