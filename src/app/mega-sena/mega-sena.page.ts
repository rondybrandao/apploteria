import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mega-sena',
  templateUrl: './mega-sena.page.html',
  styleUrls: ['./mega-sena.page.scss'],
})
export class MegaSenaPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    private router: Router,
    public loadingController: LoadingController,
  ) { }

  ngOnInit() {
  }
  voltar() {
    this.router.navigate(['/home']);
  }
  palpite(){
    this.router.navigate(['/palpite',{megasena:true}]);
  }

  // escolherDezenas(){
  //   this.router.navigate(['/dezenas-megasena', { fechamento12x6: true }]);
  // }
  async escolherDezenas(){
    this.router.navigate(['/dezenas-megasena', { fechamento: '12x6' }]);
  }
  fechamento10x3(){
    this.router.navigate(['/dezenas-megasena', { fechamento: '10x3' }]);
  }

  fechamento12x7(){
    this.router.navigate(['/dezenas-megasena', { fechamento: '12x7' }]);
  }

  fechamento18x9(){
    this.router.navigate(['/dezenas-megasena', { fechamento: '18x9' }]);
  }
  fechamento8x7(){
    this.router.navigate(['/dezenas-megasena', { fechamento: '8x7' }]);
  }
  fechamento12x17x3f(){
    this.router.navigate(['/dezenas-megasena', { fechamento: '12x17x3f' }]);
  }

}
