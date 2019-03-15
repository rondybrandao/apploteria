import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MegaSenaPage } from './mega-sena.page';

const routes: Routes = [
  {
    path: '',
    component: MegaSenaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MegaSenaPage]
})
export class MegaSenaPageModule {}
