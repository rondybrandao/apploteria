import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PalpiteQuinaPage } from './palpite-quina.page';

const routes: Routes = [
  {
    path: '',
    component: PalpiteQuinaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PalpiteQuinaPage]
})
export class PalpiteQuinaPageModule {}
