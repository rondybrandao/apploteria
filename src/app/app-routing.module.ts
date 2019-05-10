import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
  { path: 'dezenas-lotomania', loadChildren: './dezenas-lotomania/dezenas-lotomania.module#DezenasLotomaniaPageModule' },
  { path: 'esoterico', loadChildren: './esoterico/esoterico.module#EsotericoPageModule' },
  { path: 'verificador', loadChildren: './verificador/verificador.module#VerificadorPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'palpite', loadChildren: './palpite/palpite.module#PalpitePageModule' },
  { path: 'analize-aposta', loadChildren: './analize-aposta/analize-aposta.module#AnalizeApostaPageModule' },
  { path: 'analize-lotofacil', loadChildren: './analize-lotofacil/analize-lotofacil.module#AnalizeLotofacilPageModule' },
  { path: 'quadro-vizualizacao', loadChildren: './quadro-vizualizacao/quadro-vizualizacao.module#QuadroVizualizacaoPageModule' },
  { path: 'image-modal', loadChildren: './image-modal/image-modal.module#ImageModalPageModule' },
  { path: 'palpite-quina', loadChildren: './palpite-quina/palpite-quina.module#PalpiteQuinaPageModule' },
  { path: 'palpite-lotofacil', loadChildren: './palpite-lotofacil/palpite-lotofacil.module#PalpiteLotofacilPageModule' },
  { path: 'analize-quina', loadChildren: './analize-quina/analize-quina.module#AnalizeQuinaPageModule' },
  { path: 'modal-analize-quina', loadChildren: './modal-analize-quina/modal-analize-quina.module#ModalAnalizeQuinaPageModule' },
  { path: 'modal-fechamentos', loadChildren: './modal-fechamentos/modal-fechamentos.module#ModalFechamentosPageModule' },
  { path: 'modal-fechamentos-lotofacil', loadChildren: './modal-fechamentos-lotofacil/modal-fechamentos-lotofacil.module#ModalFechamentosLotofacilPageModule' },
  { path: 'modal-analize-lotofacil', loadChildren: './modal-analize-lotofacil/modal-analize-lotofacil.module#ModalAnalizeLotofacilPageModule' },
  { path: 'modal-fechamento-quina', loadChildren: './modal-fechamento-quina/modal-fechamento-quina.module#ModalFechamentoQuinaPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
