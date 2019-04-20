import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public navCtrl: NavController
  ) { }

  megasena(){
    this.navCtrl.navigateForward('/mega-sena');
  }
  lotofacil(){
    this.navCtrl.navigateForward('/lotofacil')
  }
  lotomania(){
    this.navCtrl.navigateForward('/lotomania')
  }
  quina(){
    this.navCtrl.navigateForward('/quina')
  }
  esoterico(){
    this.navCtrl.navigateForward('/esoterico')
  }
  verificador(){
    this.navCtrl.navigateForward('/verificador')
  }
  quadro_vizualizacao(){
    this.navCtrl.navigateForward('/quadro-vizualizacao')
  }

}
