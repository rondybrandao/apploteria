import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lotofacil',
  templateUrl: './lotofacil.page.html',
  styleUrls: ['./lotofacil.page.scss'],
})
export class LotofacilPage implements OnInit {

  constructor(
    private router: Router,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  fechamento22x8x6(){
    this.router.navigate(['/dezenas-lotofacil', { fechamento22x8x6: true }]);
  }

  fechamento18x6(){
    this.router.navigate(['/dezenas-lotofacil', { fechamento18x6: true }]);
  }

  palpite() {
    this.router.navigate(['palpite', {lotofacil_visao: true}])
  }
  voltar() {
    this.router.navigate(['home'])
  }
}
