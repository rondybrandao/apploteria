import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalFechamentosLotofacilPage } from './modal-fechamentos-lotofacil.page';

const routes: Routes = [
  {
    path: '',
    component: ModalFechamentosLotofacilPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalFechamentosLotofacilPage]
})
export class ModalFechamentosLotofacilPageModule {}
