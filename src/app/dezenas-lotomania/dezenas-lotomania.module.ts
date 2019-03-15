import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DezenasLotomaniaPage } from './dezenas-lotomania.page';

const routes: Routes = [
  {
    path: '',
    component: DezenasLotomaniaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DezenasLotomaniaPage]
})
export class DezenasLotomaniaPageModule {}
