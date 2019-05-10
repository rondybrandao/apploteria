import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalFechamentosPage } from './modal-fechamentos.page';

const routes: Routes = [
  {
    path: '',
    component: ModalFechamentosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalFechamentosPage]
})
export class ModalFechamentosPageModule {}
