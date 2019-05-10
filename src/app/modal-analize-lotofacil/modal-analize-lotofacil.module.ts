import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalAnalizeLotofacilPage } from './modal-analize-lotofacil.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAnalizeLotofacilPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalAnalizeLotofacilPage]
})
export class ModalAnalizeLotofacilPageModule {}
