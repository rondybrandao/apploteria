import { FirebaseService } from './../servicos/firebase.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-palpite-lotofacil',
  templateUrl: './palpite-lotofacil.page.html',
  styleUrls: ['./palpite-lotofacil.page.scss'],
})
export class PalpiteLotofacilPage implements OnInit {
  palpite = []
  resultado = [] 
  radio = 'todos'
  dezenasmaisfrequentes
  
  constructor(
    public navCtrl: NavController,
    public firebase: FirebaseService,
  ) { this.getDezenasMaisFrequentes()}

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
  
    return result
  }

  gerar_palpite_todos(){
    let al: any
    let dezenas = []
    for (let i=1; i<=15; i++){
      al = this.gerar_lotofacil_aleatorio();
      if (dezenas.includes(al)){
        al = this.gerar_lotofacil_aleatorio();
      }
      dezenas.push(al)
    }
    this.palpite = dezenas;
    
  }

  gerar_palpite_maisfrequente(){
    let al: any
    let dezenas = []
    for (let i=1; i<=15; i++){
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
    let max = Math.floor(19);
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

  getDezenasMaisFrequentes() {
    this.firebase.getDezenasLotofacilMaisFrequentes().then(res => {
      this.dezenasmaisfrequentes = res
    })
  }
}
