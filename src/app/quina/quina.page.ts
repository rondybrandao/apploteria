import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quina',
  templateUrl: './quina.page.html',
  styleUrls: ['./quina.page.scss'],
})
export class QuinaPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  palpite() {
    this.router.navigate(['palpite-quina'])
  }
  fechamento_8x8(){
    this.router.navigate(['/dezenas-quina', { fechamento: '8x8' }]);
  }

  fechamento_15x16(){
    this.router.navigate(['/dezenas-quina', {fechamento:'15x16'}])
  }
  fechamento_9x15(){
    this.router.navigate(['/dezenas-quina', {fechamento:'9x15'}])
  }
  fechamento_7x21(){
    this.router.navigate(['/dezenas-quina', {fechamento:'7x21'}])
  }
  fechamento_10x2(){
    this.router.navigate(['/dezenas-quina', {fechamento:'10x2'}])
  }
  voltar(){
    this.router.navigate(['/home'])
  }
}
