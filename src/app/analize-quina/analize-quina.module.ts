import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnalizeQuinaPage } from './analize-quina.page';

const routes: Routes = [
  {
    path: '',
    component: AnalizeQuinaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnalizeQuinaPage]
})
export class AnalizeQuinaPageModule {}
