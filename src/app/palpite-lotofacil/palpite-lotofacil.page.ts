import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-palpite-lotofacil',
  templateUrl: './palpite-lotofacil.page.html',
  styleUrls: ['./palpite-lotofacil.page.scss'],
})
export class PalpiteLotofacilPage implements OnInit {
  palpite = []
  resultado = [] 
  constructor(
    public navCtrl: NavController,
    public apiService: ApiService,
  ) { }

  ngOnInit() {
  }
  voltar(){
    this.navCtrl.navigateBack('lotofacil');
  }
  gerar_lotofacil_aleatorio(){
    let result: any
    let min = Math.ceil(1);
    let max = Math.floor(25);
    result = Math.floor(Math.random() * max - min + 1) + min;
    console.log('result:', result);
    return result
  }
  lotofacil_aleatorio(){
    let al: any
    let dezenas = []
    for (let i=1; i<=15; i++){
      al = this.gerar_lotofacil_aleatorio();
      if (dezenas.includes(al)){
        al = this.gerar_lotofacil_aleatorio();
      }
      dezenas.push(al)
    }
    console.log('dezena:', dezenas);
    this.palpite = dezenas;
    this.apiService.callVerificadorLotofacil(dezenas)
    .then((result:any[]) => {
      this.resultado = result;
      
    })
    .catch((error:any) => {
      console.log(error)
    })
  }
}
