import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../servicos/firebase.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {
  dezenas_megasena
  sorteio_megasena
  dezenas_lotofacil
  sorteio_lotofacil
  dezenas_lotomania
  sorteio_lotomania
  dezenas_quina
  sorteio_quina

  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.callresultados()
  }

  voltar() {
    this.router.navigate(['/home']);
  }

  callresultados(){
    this.firebaseService.getResultados()
    .then((result:any) =>{
      console.log(result)
      this.dezenas_megasena = result.megasena.dezenas
      this.sorteio_megasena = result.megasena.numero
      this.dezenas_lotofacil = result.lotofacil.dezenas
      this.sorteio_lotofacil = result.lotofacil.numero
      this.dezenas_lotomania = result.lotomania.dezenas
      this.sorteio_lotomania = result.lotomania.numero
      this.dezenas_quina = result.quina.dezenas
      this.sorteio_quina = result.quina.numero
    })
    .catch((error:any)=>{
      console.log('error:', error)
    })
  }

}
