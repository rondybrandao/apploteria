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

  escolherDezenas(){
    //this.navCtrl.navigateForward('/dezenas-megasena');
    this.router.navigate(['/dezenas-megasena', { fechamento12x6: true }]);
  }

  fechamneto18x3x9(){
    this.router.navigate(['/dezenas-megasena', { fechamneto18x3x9: true }]);
  }

}
