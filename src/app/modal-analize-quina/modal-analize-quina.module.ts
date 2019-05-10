import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalAnalizeQuinaPage } from './modal-analize-quina.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAnalizeQuinaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalAnalizeQuinaPage]
})
export class ModalAnalizeQuinaPageModule {}
