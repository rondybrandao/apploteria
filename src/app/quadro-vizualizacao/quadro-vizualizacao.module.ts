import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QuadroVizualizacaoPage } from './quadro-vizualizacao.page';

const routes: Routes = [
  {
    path: '',
    component: QuadroVizualizacaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuadroVizualizacaoPage]
})
export class QuadroVizualizacaoPageModule {}
