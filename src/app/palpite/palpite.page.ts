import { FirebaseService } from './../servicos/firebase.service';
import { Component, NgZone, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-palpite',
  templateUrl: './palpite.page.html',
  styleUrls: ['./palpite.page.scss'],
})
export class PalpitePage implements OnInit {
  palpite = []
  resultado = [] 
  singleValue
  radio = 'todos'
  dezenasmaisfrequentes
  
  constructor(
    public apiService: ApiService,
    public firebase: FirebaseService,
    public navCtrl: NavController,
    private zone: NgZone
  ) {
    this.zone.run(() => {
      this.getDezenasMaisrequentes()
    });
    
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
  
    return result
  }

  gerar_palpite_todos(){
    let al: any
    let dezenas = []
    for (let i=1; i<=6; i++){
      al = this.gerar_megasena_aleatorio();
      if (dezenas.includes(al)){
        al = this.gerar_megasena_aleatorio();
      }
      dezenas.push(al)
    }
    this.palpite = dezenas;
    
  }

  gerar_palpite_maisfrequente(){
    let al: any
    let dezenas = []
    for (let i=1; i<=6; i++){
      al = this.palpite_maisfrequente();
      if (dezenas.includes(al)){
        al = this.palpite_maisfrequente();
      }
      dezenas.push(al)
    }
    this.palpite = dezenas;
    
  }

  palpite_maisfrequente(){
    
    let result: any
    let min = Math.ceil(0);
    let max = Math.floor(9);
    result = Math.floor(Math.random() * max - min + 1) + min;
    console.log('result:', result)
    let dezena = this.dezenasmaisfrequentes[result]
    
    return dezena
  }

  radioGroupChange(event) {
    this.radio = event.detail.value
  }

  gerar_palpite() {
  
    if(this.radio == 'todos') {
      return this.gerar_palpite_todos()
    } else if (this.radio == 'dezmais') {
      return this.gerar_palpite_maisfrequente()
    }
  }

  getDezenasMaisrequentes() {
    this.firebase.getDezenasMegasenaMaisFrequentes().then(res => {
      this.dezenasmaisfrequentes = res
    })
  }
}
