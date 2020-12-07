import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lotomania',
  templateUrl: './lotomania.page.html',
  styleUrls: ['./lotomania.page.scss'],
})
export class LotomaniaPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  fechamento_60x12(){
    this.router.navigate(['/dezenas-lotomania', { fechamento: '60x12' }]);
  }
  fechamento_60x6(){
    this.router.navigate(['/dezenas-lotomania', { fechamento: '60x6' }]);
  }
  voltar() {
    this.router.navigate(['/home'])
  }

}
