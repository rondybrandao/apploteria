import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnalizeApostaPage } from './analize-aposta.page';

const routes: Routes = [
  {
    path: '',
    component: AnalizeApostaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnalizeApostaPage]
})
export class AnalizeApostaPageModule {}
