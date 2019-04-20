import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-palpite-quina',
  templateUrl: './palpite-quina.page.html',
  styleUrls: ['./palpite-quina.page.scss'],
})
export class PalpiteQuinaPage implements OnInit {
  palpite = []
  resultado = []

  constructor(
    public navCtrl: NavController,
    public apiService: ApiService,
    private route: ActivatedRoute,
  ) {
    
   }

  ngOnInit() {
  }
  voltar(){
    this.navCtrl.navigateBack('quina');
  }

  gerar_quina_aleatorio(){
    let result: any
    let min = Math.ceil(1);
    let max = Math.floor(80);
    result = Math.floor(Math.random() * max - min + 1) + min;
    console.log('result:', result);
    return result
  }
  quina_aleatorio(){
    let al: any
    let dezenas = []
    for (let i=1; i<=5; i++){
      al = this.gerar_quina_aleatorio();
      if (dezenas.includes(al)){
        al = this.gerar_quina_aleatorio();
      }
      dezenas.push(al)
    }
    this.palpite = dezenas;
    console.log('dezena:', dezenas);
    this.apiService.callVerificadorQuina(dezenas)
    .then((result:any[]) => {
      this.resultado = result;
    })
    .catch((error:any) => {
      console.log(error)
    })
    
  }
}
