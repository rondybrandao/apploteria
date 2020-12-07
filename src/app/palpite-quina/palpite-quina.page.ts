import { FirebaseService } from './../servicos/firebase.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-palpite-quina',
  templateUrl: './palpite-quina.page.html',
  styleUrls: ['./palpite-quina.page.scss'],
})
export class PalpiteQuinaPage implements OnInit {
  palpite = []
  resultado = []
  radio = 'todos'
  dezenasmaisfrequentes 

  constructor(
    public navCtrl: NavController,
    public firebase: FirebaseService,
    
  ) {
      //this.getDezenasMaisrequentes()
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

  gerar_palpite_todos(){
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
    
  }

  quina_aleatorio_maisfrequente(){
    let al: any
    let dezenas = []
    for (let i=1; i<=5; i++){
      al = this.gerar_palpite_maisfrequente();
      if (dezenas.includes(al)){
        al = this.gerar_palpite_maisfrequente();
      }
      dezenas.push(al)
    }
    this.palpite = dezenas;
    console.log('dezena:', dezenas);
    
  }

  gerar_palpite_maisfrequente(){
    console.log(this.radio)
    let result: any
    let min = Math.ceil(0);
    let max = Math.floor(9);
    result = Math.floor(Math.random() * max - min + 1) + min;
    console.log('result:', result)
    let dezena = this.dezenasmaisfrequentes[result]
    console.log(dezena)
    return dezena
  }

  radioGroupChange(event) {
    this.radio = event.detail.value
  }

  gerar_palpite() {
    console.log(this.radio)
    if(this.radio == 'todos') {
      return this.gerar_palpite_todos()
    } else if (this.radio == 'dezmais') {
      return this.quina_aleatorio_maisfrequente()
    }
  }

  getDezenasMaisrequentes() {
    this.firebase.getDezenasQuinaMaisFrequentes().then(res => {
      this.dezenasmaisfrequentes = res
    })
  }
   
}
