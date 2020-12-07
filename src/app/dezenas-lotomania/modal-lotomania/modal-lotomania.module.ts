import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalLotomaniaPage } from './modal-lotomania.page';

const routes: Routes = [
  {
    path: '',
    component: ModalLotomaniaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalLotomaniaPage]
})
export class ModalLotomaniaPageModule {}
