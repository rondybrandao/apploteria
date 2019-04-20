import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-palpite',
  templateUrl: './palpite.page.html',
  styleUrls: ['./palpite.page.scss'],
})
export class PalpitePage implements OnInit {
  palpite = []
  resultado = []
  //quina 
  megasena 
  //lotofacil 
  constructor(
    public apiService: ApiService,
    private route: ActivatedRoute,
    public navCtrl: NavController,
  ) {
    this.megasena = this.route.snapshot.paramMap.get('megasena_visao');
    //this.lotofacil = this.route.snapshot.paramMap.get('lotofacil_visao')
  }

  ngOnInit() {
  }
  voltar(){
    this.navCtrl.navigateBack('mega-sena');
  }
  gerar_megasena_aleatorio(){
    let result: any
    let min = Math.ceil(1);
    let max = Math.floor(60);
    result = Math.floor(Math.random() * max - min + 1) + min;
    console.log('result:', result);
    return result
  }
  megasena_aleatorio(){
    let al: any
    let dezenas = []
    for (let i=1; i<=6; i++){
      al = this.gerar_megasena_aleatorio();
      if (dezenas.includes(al)){
        al = this.gerar_megasena_aleatorio();
      }
      dezenas.push(al)
    }
    this.palpite = dezenas
    console.log('dezena:', dezenas);
    this.apiService.callVerificadorMegasena(dezenas)
    .then((result:any[]) => {
      this.resultado = result;
    })
    .catch((error:any) => {
      console.log(error)
    })
  }
  gerarPalpite(){
    this.megasena_aleatorio()
  }

  // gerar_lotofacil_aleatorio(){
  //   let result: any
  //   let min = Math.ceil(1);
  //   let max = Math.floor(25);
  //   result = Math.floor(Math.random() * max - min + 1) + min;
  //   console.log('result:', result);
  //   return result
  // }
  // lotofacil_aleatorio(){
  //   let al: any
  //   let dezenas = []
  //   for (let i=1; i<=15; i++){
  //     al = this.gerar_lotofacil_aleatorio();
  //     dezenas.push(al)
  //   }
  //   console.log('dezena:', dezenas);
  //   this.palpite = dezenas;
  //   this.apiService.callVerificadorLotofacil(dezenas)
  //   .then((result:any[]) => {
  //     this.resultado = result;
      
  //   })
  //   .catch((error:any) => {
  //     console.log(error)
  //   })
  // }

  // gerar_quina_aleatorio(){
  //   let result: any
  //   let min = Math.ceil(1);
  //   let max = Math.floor(80);
  //   result = Math.floor(Math.random() * max - min + 1) + min;
  //   console.log('result:', result);
  //   return result
  // }
  // quina_aleatorio(){
  //   let al: any
  //   let dezenas = []
  //   for (let i=1; i<=5; i++){
  //     al = this.gerar_quina_aleatorio();
  //     dezenas.push(al)
  //   }
  //   this.palpite = dezenas;
  //   console.log('dezena:', dezenas);
  //   this.apiService.callVerificadorQuina(dezenas)
  //   .then((result:any[]) => {
  //     this.resultado = result;
  //   })
  //   .catch((error:any) => {
  //     console.log(error)
  //   })
    
  // }
}
