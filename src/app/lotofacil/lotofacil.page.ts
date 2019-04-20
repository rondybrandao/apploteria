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
  fechamento20x4(){
    this.router.navigate(['/dezenas-lotofacil', { fechamento20x4: true }]);
  }
  fechamento21x5(){
    this.router.navigate(['/dezenas-lotofacil', { fechamento21x5: true }]);
  }

  palpite() {
    this.router.navigate(['palpite-lotofacil'])
  }
  voltar() {
    this.router.navigate(['home'])
  }
}
