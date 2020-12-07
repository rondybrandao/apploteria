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

  fechamento18x6(){
    this.router.navigate(['/dezenas-lotofacil', { fechamento: '18x6' }]);
  }

  fechamento18x24(){
    this.router.navigate(['/dezenas-lotofacil', { fechamento: '18x24' }]);
  }
  fechamento20x4(){
    this.router.navigate(['/dezenas-lotofacil', { fechamento: '20x4' }]);
  }
  fechamento13x66(){
    this.router.navigate(['/dezenas-lotofacil', { fechamento: '13x66' }]);
  }

  fechamento18x35(){
    this.router.navigate(['/dezenas-lotofacil', { fechamento: '18x35' }]);
  }

  palpite() {
    this.router.navigate(['palpite-lotofacil'])
  }
  voltar() {
    this.router.navigate(['home'])
  }
}
