import { DezenasMegasenaPage } from './../dezenas-megasena/dezenas-megasena.page';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mega-sena',
  templateUrl: './mega-sena.page.html',
  styleUrls: ['./mega-sena.page.scss'],
})
export class MegaSenaPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
  }
  palpite(){
    this.router.navigate(['/palpite',{megasena:true}]);
  }

  escolherDezenas(){
    this.router.navigate(['/dezenas-megasena', { fechamento12x6: true }]);
  }

  fechamento18x3x9(){
    this.router.navigate(['/dezenas-megasena', { fechamento18x3x9: true }]);
  }

  fechamento12x3x17(){
    this.router.navigate(['/dezenas-megasena', { fechamento12x3x17: true }]);
  }

  fechamento9x12(){
    this.router.navigate(['/dezenas-megasena', { fechamento9x12: true }]);
  }
  fechamento8x7(){
    this.router.navigate(['/dezenas-megasena', { fechamento8x7: true }]);
  }
  fechamento10x3(){
    this.router.navigate(['/dezenas-megasena', { fechamento10x3: true }]);
  }

}
