import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'mega-sena', loadChildren: './mega-sena/mega-sena.module#MegaSenaPageModule' },
  { path: 'dezenas-megasena', loadChildren: './dezenas-megasena/dezenas-megasena.module#DezenasMegasenaPageModule' },
  { path: 'lotofacil', loadChildren: './lotofacil/lotofacil.module#LotofacilPageModule' },
  { path: 'dezenas-lotofacil', loadChildren: './dezenas-lotofacil/dezenas-lotofacil.module#DezenasLotofacilPageModule' },
  { path: 'quina', loadChildren: './quina/quina.module#QuinaPageModule' },
  { path: 'dezenas-quina', loadChildren: './dezenas-quina/dezenas-quina.module#DezenasQuinaPageModule' },
  { path: 'lotomania', loadChildren: './lotomania/lotomania.module#LotomaniaPageModule' },
  { path: 'dezenas-lotomania', loadChildren: './dezenas-lotomania/dezenas-lotomania.module#DezenasLotomaniaPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
