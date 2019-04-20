import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verificador',
  templateUrl: './verificador.page.html',
  styleUrls: ['./verificador.page.scss'],
})
export class VerificadorPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  megasena(){
    this.router.navigate(['analize-aposta', { megasena: true }]);
  }
  lotofacil(){
    this.router.navigate(['analize-lotofacil']);
  }
  lotomania(){
    this.router.navigate(['/dezenas-lotomania', { verificador: true }]);
  }
  quina(){
    this.router.navigate(['/analize-quina']);
  }
  voltar(){
    this.router.navigate(['home'])
  }

}
