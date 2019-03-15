import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DezenasMegasenaPage } from './dezenas-megasena.page';

const routes: Routes = [
  {
    path: '',
    component: DezenasMegasenaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DezenasMegasenaPage]
})
export class DezenasMegasenaPageModule {}
