import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnalizeLotofacilPage } from './analize-lotofacil.page';

const routes: Routes = [
  {
    path: '',
    component: AnalizeLotofacilPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnalizeLotofacilPage]
})
export class AnalizeLotofacilPageModule {}
