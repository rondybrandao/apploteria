import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FechamentosService {
  jogo1; jogo2; jogo3; jogo4; jogo5; jogo6 = []
  jogo7; jogo8; jogo9; jogo10; jogo11; jogo12 = []
  jogo13; jogo14; jogo15; jogo16; jogo17; jogo18 = []
  jogo19; jogo20; jogo21; jogo22; jogo23; jogo24 = []
  jogo25; jogo26; jogo27; jogo28; jogo29; jogo30 = []
  jogo31; jogo32; jogo33; jogo34; jogo35; jogo36 = []
  jogo37; jogo38; jogo39; jogo40; jogo41; jogo42 = []
  jogo43; jogo44; jogo45; jogo46; jogo47; jogo48 = []
  jogo49; jogo50; jogo51; jogo52; jogo53; jogo54 = []
  jogo55; jogo56; jogo57; jogo58; jogo59; jogo60 = []
  jogo61; jogo62; jogo63; jogo64; jogo65; jogo66 = []

  constructor() { }

  callFechamento_10x3(dez) {
    //100% quadra acertando 6
    return new Promise((resolve, reject) => {
      console.log('dezenas:', dez)
      this.jogo1 = [dez[0], dez[1], dez[3], dez[5], dez[6], dez[7]]
      this.jogo2 = [dez[0], dez[1], dez[4], dez[5], dez[8], dez[9]]
      this.jogo3 = [dez[2], dez[3], dez[4], dez[7], dez[8], dez[9]]
      
      
      let fechamentos = [
        this.jogo1,
        this.jogo2,
        this.jogo3,
      ]

      resolve(fechamentos)
    
    })
  }

  callFechamento_12x6(dez) {
    return new Promise((resolve, reject) => {
      console.log('dezenas:', dez)
      this.jogo1 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5]]
      this.jogo2 = [dez[6], dez[7], dez[8], dez[9], dez[10], dez[11]]
      this.jogo3 = [dez[1], dez[2], dez[3], dez[4], dez[5], dez[6]]
      this.jogo4 = [dez[7], dez[8], dez[9], dez[10], dez[11], dez[0]]
      this.jogo5 = [dez[2], dez[3], dez[4], dez[5], dez[6], dez[7]]
      this.jogo6 = [dez[8], dez[9], dez[10], dez[11], dez[0], dez[1]]
      
      let fechamentos = [
        this.jogo1,
        this.jogo2,
        this.jogo3,
        this.jogo4,
        this.jogo5,
        this.jogo6,
      ]

      resolve(fechamentos)
    
    })
  }

  callFechamento_12x7(dez) {
    return new Promise((resolve, reject) => {
      this.jogo1 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5]]
      this.jogo2 = [dez[0], dez[1], dez[2], dez[4], dez[5], dez[6]]
      this.jogo3 = [dez[0], dez[1], dez[2], dez[5], dez[6], dez[7]]
      this.jogo4 = [dez[0], dez[1], dez[2], dez[6], dez[7], dez[8]]
      this.jogo5 = [dez[0], dez[1], dez[2], dez[7], dez[8], dez[9]]
      this.jogo6 = [dez[0], dez[1], dez[2], dez[8], dez[9], dez[10]]
      this.jogo7 = [dez[0], dez[1], dez[2], dez[9], dez[10], dez[11]]

      let fechamentos = [
        this.jogo1,
        this.jogo2,
        this.jogo3,
        this.jogo4,
        this.jogo5,
        this.jogo6,
        this.jogo7,
      ]

      resolve(fechamentos)
    })
  }
  
  callFechamento_8x7(dez) {
  //100% quadra acertando 4
  //65% quina acertando 5
  //100% quina acertando 6
  //25% sena acertando 6
    return new Promise((resolve, reject) => {
      this.jogo1 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5]]
      this.jogo2 = [dez[0], dez[1], dez[2], dez[3], dez[5], dez[6]]
      this.jogo3 = [dez[0], dez[1], dez[2], dez[3], dez[5], dez[7]]
      this.jogo4 = [dez[0], dez[1], dez[2], dez[4], dez[6], dez[7]]
      this.jogo5 = [dez[0], dez[3], dez[4], dez[5], dez[6], dez[7]]
      this.jogo6 = [dez[1], dez[2], dez[3], dez[4], dez[6], dez[7]]
      this.jogo7 = [dez[1], dez[2], dez[4], dez[5], dez[6], dez[7]]

      let fechamentos = [
        this.jogo1,
        this.jogo2,
        this.jogo3,
        this.jogo4,
        this.jogo5,
        this.jogo6,
        this.jogo7,
      ]

      resolve(fechamentos)
    })
  }

  callFechamento_12x17x3f(dez) {
    return new Promise((resolve, reject) => {
      this.jogo1 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5]]
      this.jogo2 = [dez[0], dez[1], dez[2], dez[3], dez[6], dez[7]]
      this.jogo3 = [dez[0], dez[1], dez[2], dez[3], dez[8], dez[9]]
      this.jogo4 = [dez[0], dez[1], dez[2], dez[3], dez[10], dez[11]]
      this.jogo5 = [dez[0], dez[1], dez[2], dez[4], dez[6], dez[7]]
      this.jogo6 = [dez[0], dez[1], dez[2], dez[4], dez[8], dez[9]]
      this.jogo7 = [dez[0], dez[1], dez[2], dez[4], dez[10], dez[11]]
      this.jogo8 = [dez[0], dez[1], dez[2], dez[5], dez[6], dez[7]]
      this.jogo9 = [dez[0], dez[1], dez[2], dez[5], dez[8], dez[9]]
      this.jogo10 = [dez[0], dez[1], dez[2], dez[5], dez[10], dez[11]]
      this.jogo11 = [dez[0], dez[1], dez[2], dez[6], dez[7], dez[8]]
      this.jogo12 = [dez[0], dez[1], dez[2], dez[6], dez[9], dez[10]]
      this.jogo13 = [dez[0], dez[1], dez[2], dez[6], dez[10], dez[11]]
      this.jogo14 = [dez[0], dez[1], dez[2], dez[7], dez[8], dez[9]]
      this.jogo15 = [dez[0], dez[1], dez[2], dez[7], dez[10], dez[11]]
      this.jogo16 = [dez[0], dez[1], dez[2], dez[8], dez[10], dez[11]]
      this.jogo17 = [dez[0], dez[1], dez[2], dez[9], dez[10], dez[11]]

      let fechamentos = [
        this.jogo1,
        this.jogo2,
        this.jogo3,
        this.jogo4,
        this.jogo5,
        this.jogo6,
        this.jogo7,
        this.jogo8,
        this.jogo9,
        this.jogo10,
        this.jogo11,
        this.jogo12,
        this.jogo13,
        this.jogo14,
        this.jogo15,
        this.jogo16,
        this.jogo17,
      ]

      resolve(fechamentos)
    })
  }

  callFechamento_18x9(dez) {
    return new Promise((resolve, reject) => {
      this.jogo1 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5]]
      this.jogo2 = [dez[0], dez[7], dez[8], dez[3], dez[4], dez[11]]
      this.jogo3 = [dez[0], dez[13], dez[14], dez[3], dez[4], dez[17]]
      this.jogo4 = [dez[6], dez[1], dez[2], dez[9], dez[10], dez[5]]
      this.jogo5 = [dez[6], dez[7], dez[8], dez[9], dez[10], dez[11]]
      this.jogo6 = [dez[6], dez[13], dez[14], dez[9], dez[10], dez[17]]
      this.jogo7 = [dez[12], dez[1], dez[2], dez[15], dez[16], dez[5]]
      this.jogo8 = [dez[12], dez[7], dez[8], dez[15], dez[16], dez[11]]
      this.jogo9 = [dez[12], dez[13], dez[14], dez[15], dez[16], dez[17]]

      let fechamentos = [
        this.jogo1,
        this.jogo2,
        this.jogo3,
        this.jogo4,
        this.jogo5,
        this.jogo6,
        this.jogo7,
        this.jogo8,
        this.jogo9,
      ]

      resolve(fechamentos)
    })
  }

  //Fechamentos Lotofacil

  callFechamentoLotofacil_18x6(dez) {
    //15 acertos
    //13 pontos garantido
    return new Promise((resolve, reject) => {
      this.jogo1 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[7], dez[8], dez[9], dez[10], dez[12], dez[14], dez[15], dez[16], dez[17]]
      this.jogo2 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[16], dez[17], dez[10], dez[11], dez[12], dez[13], dez[15], dez[16]]
      this.jogo3 = [dez[0], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[10], dez[11], dez[12], dez[13], dez[14], dez[16], dez[17]]
      this.jogo4 = [dez[0], dez[1], dez[2], dez[3], dez[5], dez[6], dez[7], dez[9], dez[11], dez[12], dez[13], dez[14], dez[15], dez[16], dez[17]]
      this.jogo5 = [dez[0], dez[1], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[13], dez[14], dez[15], dez[17]]
      this.jogo6 = [dez[1], dez[2], dez[4], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[14], dez[15], dez[16], dez[17]]
      
      let fechamentos = [
        this.jogo1,
        this.jogo2,
        this.jogo3,
        this.jogo4,
        this.jogo5,
        this.jogo6,
      ]
      resolve(fechamentos)
    })
  }

  callFechamentoLotofacil_18x24(dez) {
    //15 acertos
    //14 pontos garantido
    
    return new Promise((resolve, reject) => {
      this.jogo1 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[12], dez[15], dez[16], dez[17]]
      this.jogo2 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[10], dez[11], dez[13], dez[14], dez[15], dez[16], dez[17]]
      this.jogo3 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[8], dez[9], dez[10], dez[11], dez[13], dez[14], dez[15], dez[17]]
      this.jogo4 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[9], dez[11], dez[12], dez[13], dez[14], dez[15], dez[16], dez[17]]
      this.jogo5 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[7], dez[8], dez[11], dez[12], dez[11], dez[13], dez[14], dez[15], dez[17]]
      this.jogo6 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[7], dez[9], dez[10], dez[11], dez[12], dez[13], dez[14], dez[15], dez[17]]
      this.jogo7 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[14], dez[15], dez[16]]
      this.jogo8 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[6], dez[7], dez[8], dez[9], dez[10], dez[12], dez[13], dez[14], dez[16], dez[17]]
      this.jogo9 = [dez[0], dez[2], dez[2], dez[3], dez[5], dez[6], dez[7], dez[8], dez[9], dez[11], dez[12], dez[13], dez[14], dez[15], dez[17]]
      this.jogo10 = [dez[0], dez[1], dez[2], dez[3], dez[5], dez[6], dez[8], dez[10], dez[11], dez[12], dez[13], dez[14], dez[15], dez[16], dez[17]]
      this.jogo11 = [dez[0], dez[1], dez[2], dez[3], dez[5], dez[7], dez[8], dez[9], dez[10], dez[11], dez[13], dez[14], dez[15], dez[16], dez[17]]
      this.jogo12 = [dez[1], dez[2], dez[2], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[11], dez[13], dez[14], dez[15], dez[16], dez[17]]
      this.jogo13 = [dez[0], dez[1], dez[2], dez[4], dez[5], dez[6], dez[7], dez[8], dez[10], dez[11], dez[12], dez[13], dez[14], dez[15], dez[17]]
      this.jogo14 = [dez[0], dez[1], dez[2], dez[4], dez[5], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[14], dez[15], dez[16], dez[17]]
      this.jogo15 = [dez[0], dez[1], dez[2], dez[5], dez[6], dez[7], dez[9], dez[10], dez[11], dez[12], dez[13], dez[14], dez[15], dez[16], dez[17]]
      this.jogo16 = [dez[0], dez[1], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[16], dez[17]]
      this.jogo17 = [dez[0], dez[1], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[12], dez[13], dez[14], dez[15], dez[16]]
      this.jogo18 = [dez[0], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[14], dez[16]]
      this.jogo19 = [dez[0], dez[2], dez[3], dez[4], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[15], dez[16], dez[17]]
      this.jogo20 = [dez[0], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[14], dez[15], dez[16], dez[17]]
      this.jogo21 = [dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[15], dez[16]]
      this.jogo22 = [dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[14], dez[16], dez[17]]
      this.jogo23 = [dez[1], dez[3], dez[4], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[14], dez[15], dez[16], dez[17]]
      this.jogo24 = [dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[12], dez[13], dez[14], dez[15], dez[16], dez[17]]

      let fechamentos = [
        this.jogo1,
        this.jogo2,
        this.jogo3,
        this.jogo4,
        this.jogo5,
        this.jogo6,
        this.jogo7,
        this.jogo8,
        this.jogo9,
        this.jogo10,
        this.jogo11,
        this.jogo12,
        this.jogo13,
        this.jogo14,
        this.jogo15,
        this.jogo16,
        this.jogo17,
        this.jogo18,
        this.jogo19,
        this.jogo20,
        this.jogo21,
        this.jogo22,
        this.jogo23,
        this.jogo24
      ]

      resolve(fechamentos)
    })
  }

  callFechamentoLotofacil_12x16(dez) {
    //12 acertos FIXOS
    //14 pontos garantido
    return new Promise((resolve, reject) => {
      this.jogo1 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[14]]
      this.jogo2 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[15], dez[16], dez[17]]
      this.jogo3 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[18], dez[19], dez[20]]
      this.jogo4 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[21], dez[22], dez[23]]
      this.jogo5 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[15], dez[24]]
      this.jogo6 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[13], dez[16], dez[24]]
      this.jogo7 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[14], dez[17], dez[18]]
      this.jogo8 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[14], dez[19], dez[21]]
      this.jogo9 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[17], dez[20], dez[22]]
      this.jogo10 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[16], dez[23]]
      this.jogo11 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[13], dez[15], dez[23]]
      this.jogo12 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[18], dez[19], dez[22]]
      this.jogo13 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[18], dez[20], dez[21]]
      this.jogo14 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[14], dez[23], dez[24]]
      this.jogo15 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[17], dez[19], dez[21]]
      this.jogo16 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[14], dez[15], dez[16]]
      
      let fechamentos = [
        this.jogo1,
        this.jogo2,
        this.jogo3,
        this.jogo4,
        this.jogo5,
        this.jogo6,
        this.jogo7,
        this.jogo8,
        this.jogo9,
        this.jogo10,
        this.jogo11,
        this.jogo12,
        this.jogo13,
        this.jogo14,
        this.jogo15,
        this.jogo16,
      ]
      resolve(fechamentos)
    })
  }

  callFechamentoLotofacil_13x66(dez) {
    //13 acertos
    //15 pontos garantido

    let d = ['01','02','03','04','05']
    d.forEach(element => {
      if(element in dez)
        {console.log(d)}
    });

    return new Promise((resolve, reject) => {
      this.jogo1 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[14]]
      this.jogo2 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[15]]
      this.jogo3 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[16]]
      this.jogo4 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[17]]
      this.jogo5 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[18]]
      this.jogo6 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[19]]
      this.jogo7 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[20]]
      this.jogo8 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[21]]
      this.jogo9 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[22]]
      this.jogo10 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[23]]
      this.jogo11 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[24]]
      this.jogo12 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[14], dez[15]]
      this.jogo13 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[14], dez[16]]
      this.jogo14 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[14], dez[17]]
      this.jogo15 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[14], dez[18]]
      this.jogo16 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[14], dez[19]]
      this.jogo17 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[14], dez[20]]
      this.jogo18 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[14], dez[21]]
      this.jogo19 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[14], dez[22]]
      this.jogo20 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[14], dez[23]]
      this.jogo21 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[14], dez[24]]
      this.jogo22 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[15], dez[16]]
      this.jogo23 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[15], dez[17]]
      this.jogo24 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[15], dez[18]]
      this.jogo25 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[15], dez[19]]
      this.jogo26 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[15], dez[20]]
      this.jogo27 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[15], dez[21]]
      this.jogo28 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[15], dez[22]]
      this.jogo29 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[15], dez[23]]
      this.jogo30 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[15], dez[24]]
      this.jogo31 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[16], dez[17]]
      this.jogo32 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[16], dez[18]]
      this.jogo33 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[16], dez[19]]
      this.jogo34 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[16], dez[20]]
      this.jogo35 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[16], dez[21]]
      this.jogo35 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[16], dez[22]]
      this.jogo37 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[16], dez[23]]
      this.jogo38 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[16], dez[24]]
      this.jogo39 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[17], dez[18]]
      this.jogo40 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[17], dez[19]]
      this.jogo41 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[17], dez[20]]
      this.jogo42 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[17], dez[21]]
      this.jogo43 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[17], dez[22]]
      this.jogo44 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[17], dez[23]]
      this.jogo45 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[17], dez[24]]
      this.jogo46 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[18], dez[19]]
      this.jogo47 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[18], dez[20]]
      this.jogo48 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[18], dez[21]]
      this.jogo49 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[18], dez[22]]
      this.jogo50 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[18], dez[23]]
      this.jogo51 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[18], dez[24]]
      this.jogo52 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[19], dez[20]]
      this.jogo53 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[19], dez[21]]
      this.jogo54 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[19], dez[22]]
      this.jogo55 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[19], dez[23]]
      this.jogo56 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[19], dez[24]]
      this.jogo57 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[20], dez[21]]
      this.jogo58 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[20], dez[22]]
      this.jogo59 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[20], dez[23]]
      this.jogo60 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[20], dez[24]]
      this.jogo61 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[21], dez[22]]
      this.jogo62 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[21], dez[23]]
      this.jogo63 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[21], dez[24]]
      this.jogo64 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[22], dez[23]]
      this.jogo65 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[22], dez[24]]
      this.jogo66 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[23], dez[24]]
      
      let fechamentos = [
        this.jogo1,
        this.jogo2,
        this.jogo3,
        this.jogo4,
        this.jogo5,
        this.jogo6,
        this.jogo7,
        this.jogo8,
        this.jogo9,
        this.jogo10,
        this.jogo11,
        this.jogo12,
        this.jogo13,
        this.jogo14,
        this.jogo15,
        this.jogo16,
        this.jogo17,
        this.jogo18,
        this.jogo19,
        this.jogo20,
        this.jogo21,
        this.jogo22,
        this.jogo23,
        this.jogo24,
        this.jogo25,
        this.jogo26,
        this.jogo27,
        this.jogo28,
        this.jogo29,
        this.jogo30,
        this.jogo31,
        this.jogo32,
        this.jogo33,
        this.jogo34,
        this.jogo35,
        this.jogo36,
        this.jogo37,
        this.jogo38,
        this.jogo39,
        this.jogo40,
        this.jogo41,
        this.jogo42,
        this.jogo43,
        this.jogo44,
        this.jogo45,
        this.jogo46,
        this.jogo47,
        this.jogo48,
        this.jogo49,
        this.jogo50,
        this.jogo51,
        this.jogo52,
        this.jogo53,
        this.jogo54,
        this.jogo55,
        this.jogo56,
        this.jogo57,
        this.jogo58,
        this.jogo59,
        this.jogo60,
        this.jogo61,
        this.jogo62,
        this.jogo63,
        this.jogo64,
        this.jogo65,
        this.jogo66,
      ]

      resolve(fechamentos)
    })
  }

  callFechamentoLotofacil_18x35(dez) {
    //11 fixa + 4 livres == 1cartao-15pontos; 12cartoes-14pontos; 18-13pontos; 4-12 pontos
    //11 fixas + 3 livres == 4-14 pontos; 18-13 pontos;
    //11 fixas + 2 livres == 10-13 pontos; 20-12 pontos
    //11 fixas + 1 livre + 20-12 pontos; 15-11 pontos

    let d = ['01','02','03','04','05']
    d.forEach(element => {
      if(element in dez)
        {console.log(d)}
    });

    return new Promise((resolve, reject) => {
      this.jogo1 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[14]]
      this.jogo2 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[15]]
      this.jogo3 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[16]]
      this.jogo4 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[17]]
      this.jogo5 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[14], dez[15]]
      this.jogo6 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[14], dez[16]]
      this.jogo7 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[14], dez[17]]
      this.jogo8 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[15], dez[16]]
      this.jogo9 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[15], dez[17]]
      this.jogo10 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[16], dez[17]]
      this.jogo11 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[13], dez[14], dez[15]]
      this.jogo12 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[13], dez[14], dez[16]]
      this.jogo13 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[13], dez[14], dez[17]]
      this.jogo14 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[13], dez[15], dez[16]]
      this.jogo15 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[13], dez[15], dez[17]]
      this.jogo16 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[13], dez[16], dez[17]]

      this.jogo17 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[14], dez[15], dez[16]]
      this.jogo18 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[14], dez[15], dez[17]]

      this.jogo19 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[14], dez[16], dez[17]]
      this.jogo20 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[15], dez[16], dez[17]]
      this.jogo21 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[12], dez[13], dez[14], dez[15]]
      this.jogo22 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[12], dez[13], dez[14], dez[16]]
      this.jogo23 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[12], dez[13], dez[14], dez[17]]
      this.jogo24 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[12], dez[13], dez[15], dez[16]]
      this.jogo25 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[12], dez[13], dez[15], dez[17]]
      this.jogo26 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[12], dez[13], dez[16], dez[17]]
      this.jogo27 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[12], dez[14], dez[15], dez[16]]
      this.jogo28 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[12], dez[14], dez[15], dez[17]]
      this.jogo29 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[12], dez[14], dez[16], dez[17]]
      this.jogo30 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[12], dez[15], dez[16], dez[17]]
      this.jogo31 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[13], dez[14], dez[15], dez[16]]
      this.jogo32 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[13], dez[14], dez[15], dez[17]]
      this.jogo33 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[13], dez[14], dez[16], dez[17]]
      this.jogo34 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[13], dez[15], dez[16], dez[17]]
      this.jogo35 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[14], dez[15], dez[16], dez[17]]
     
     
      let fechamentos = [
        this.jogo1,
        this.jogo2,
        this.jogo3,
        this.jogo4,
        this.jogo5,
        this.jogo6,
        this.jogo7,
        this.jogo8,
        this.jogo9,
        this.jogo10,
        this.jogo11,
        this.jogo12,
        this.jogo13,
        this.jogo14,
        this.jogo15,
        this.jogo16,
        this.jogo17,
        this.jogo18,
        this.jogo19,
        this.jogo20,
        this.jogo21,
        this.jogo22,
        this.jogo23,
        this.jogo24,
        this.jogo25,
        this.jogo26,
        this.jogo27,
        this.jogo28,
        this.jogo29,
        this.jogo30,
        this.jogo31,
        this.jogo32,
        this.jogo33,
        this.jogo34,
        this.jogo35,
      ]

      resolve(fechamentos)
    })
  }

  callFechamentoLotofacil_20x4(dez) {
    // acertando 15 100% 12 pontos
    return new Promise((resolve, reject) => {
      this.jogo1 = [dez[0], dez[1], dez[2], dez[3], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[14], dez[15], dez[19]]
      this.jogo2 = [dez[0], dez[1], dez[3], dez[4], dez[5], dez[7], dez[9], dez[10], dez[11], dez[13], dez[14], dez[15], dez[16], dez[17], dez[18]]
      this.jogo3 = [dez[0], dez[2], dez[3], dez[4], dez[5], dez[6], dez[8], dez[9], dez[11], dez[12], dez[13], dez[16], dez[17], dez[18], dez[19]]
      this.jogo4 = [dez[1], dez[2], dez[4], dez[6], dez[7], dez[8], dez[10], dez[12], dez[13], dez[14], dez[15], dez[16], dez[17], dez[18], dez[19]]
      
      let fechamentos = [
        this.jogo1,
        this.jogo2,
        this.jogo3,
        this.jogo4,
      ]
      resolve(fechamentos)
    })
  }

  //QUINA

  callFechamentoQuina_8x8(dez) {
    //4 acertos
    //3 pontos garantido & 90% quadra
    //5 acertos 100% quadra $ 75% quina
    return new Promise((resolve, reject) => {
      this.jogo1 = [dez[0], dez[1], dez[2], dez[3], dez[6]]
      this.jogo2 = [dez[0], dez[1], dez[4], dez[5], dez[7]]
      this.jogo3 = [dez[0], dez[2], dez[4], dez[5], dez[7]]
      this.jogo4 = [dez[0], dez[2], dez[5], dez[6], dez[7]]
      this.jogo5 = [dez[0], dez[3], dez[4], dez[6], dez[7]]
      this.jogo6 = [dez[1], dez[2], dez[3], dez[4], dez[7]]
      this.jogo7 = [dez[1], dez[2], dez[3], dez[5], dez[6]]
      this.jogo8 = [dez[1], dez[3], dez[4], dez[6], dez[7]]
      
      let fechamentos = [
        this.jogo1,
        this.jogo2,
        this.jogo3,
        this.jogo4,
        this.jogo5,
        this.jogo6,
        this.jogo7,
        this.jogo8,
      ]
      resolve(fechamentos)
    })
  }

  callFechamentoQuina_15x16(dez) {
    //aceetando 3dz 38% Terno 
    //acertando 4 dez 85% TERNO
    //acertando 5 dez 100% TERNO
    //acertando 5 dez 50% QUADRA
    //acertando 5 10% QUINA 
    return new Promise((resolve, reject) => {
      this.jogo1 = [dez[0], dez[1], dez[2], dez[11], dez[12]]
      this.jogo2 = [dez[0], dez[2], dez[3], dez[10], dez[13]]
      this.jogo3 = [dez[0], dez[3], dez[6], dez[7], dez[9]]
      this.jogo4 = [dez[0], dez[4], dez[6], dez[8], dez[13]]
      this.jogo5 = [dez[0], dez[8], dez[9], dez[12], dez[14]]
      this.jogo6 = [dez[1], dez[2], dez[6], dez[9], dez[14]]
      this.jogo7 = [dez[1], dez[3], dez[4], dez[5], dez[9]]
      this.jogo8 = [dez[1], dez[4], dez[7], dez[13], dez[14]]
      this.jogo9 = [dez[1], dez[5], dez[6], dez[8], dez[12]]
      this.jogo10 = [dez[2], dez[4], dez[5], dez[10], dez[12]]
      this.jogo11 = [dez[2], dez[7], dez[8], dez[11], dez[13]]
      this.jogo12 = [dez[3], dez[4], dez[6], dez[12], dez[14]]
      this.jogo13 = [dez[3], dez[5], dez[8], dez[10], dez[14]]
      this.jogo14 = [dez[4], dez[8], dez[9], dez[10], dez[11]]
      this.jogo15 = [dez[5], dez[6], dez[7], dez[10], dez[11]]
      this.jogo16 = [dez[5], dez[11], dez[12], dez[13], dez[14]]
      
      let fechamentos = [
        this.jogo1,
        this.jogo2,
        this.jogo3,
        this.jogo4,
        this.jogo5,
        this.jogo6,
        this.jogo7,
        this.jogo8,
        this.jogo9,
        this.jogo10,
        this.jogo11,
        this.jogo12,
        this.jogo13,
        this.jogo14,
        this.jogo15,
        this.jogo16,
      ]
      resolve(fechamentos)
    })
  }

  callFechamentoQuina_9x15(dez) {
    //aceetando 3 fixa + 2 livre  100%QUINA 8QUADRA 6TERNO 
    //acertando 2 fixa + 2 livre  3 QUDRA
    //acertando 5 dez 100% TERNO
    
    return new Promise((resolve, reject) => {
      this.jogo1 = [dez[0], dez[1], dez[6], dez[7], dez[8]]
      this.jogo2 = [dez[0], dez[5], dez[6], dez[7], dez[8]]
      this.jogo3 = [dez[1], dez[5], dez[6], dez[7], dez[8]]
      this.jogo4 = [dez[3], dez[4], dez[6], dez[7], dez[8]]
      this.jogo5 = [dez[0], dez[2], dez[6], dez[7], dez[8]]
      this.jogo6 = [dez[1], dez[2], dez[6], dez[7], dez[8]]
      this.jogo7 = [dez[2], dez[3], dez[6], dez[7], dez[8]]
      this.jogo8 = [dez[3], dez[5], dez[6], dez[7], dez[8]]
      this.jogo9 = [dez[0], dez[3], dez[6], dez[7], dez[8]]
      this.jogo10 = [dez[1], dez[3], dez[6], dez[7], dez[8]]
      this.jogo11 = [dez[2], dez[4], dez[6], dez[7], dez[8]]
      this.jogo12 = [dez[4], dez[5], dez[6], dez[7], dez[8]]
      this.jogo13 = [dez[0], dez[4], dez[6], dez[7], dez[8]]
      this.jogo14 = [dez[1], dez[4], dez[6], dez[7], dez[8]]
      this.jogo15 = [dez[2], dez[5], dez[6], dez[7], dez[8]]
      
      let fechamentos = [
        this.jogo1,
        this.jogo2,
        this.jogo3,
        this.jogo4,
        this.jogo5,
        this.jogo6,
        this.jogo7,
        this.jogo8,
        this.jogo9,
        this.jogo10,
        this.jogo11,
        this.jogo12,
        this.jogo13,
        this.jogo14,
        this.jogo15,
        
      ]
      resolve(fechamentos)
    })
  }

  callFechamentoQuina_7x21(dez) {
    //aceetando 3  6 TERNO 
    //acertando 4  3 QUDRA + 12 TERNO
    //acertando 5  100% QUINA
    
    return new Promise((resolve, reject) => {
      this.jogo1 = [dez[0], dez[1], dez[2], dez[3], dez[4]]
      this.jogo2 = [dez[0], dez[1], dez[2], dez[3], dez[5]]
      this.jogo3 = [dez[0], dez[1], dez[2], dez[3], dez[6]]
      this.jogo4 = [dez[0], dez[1], dez[2], dez[4], dez[5]]
      this.jogo5 = [dez[0], dez[1], dez[2], dez[4], dez[6]]
      this.jogo6 = [dez[0], dez[1], dez[2], dez[5], dez[6]]
      this.jogo7 = [dez[0], dez[1], dez[3], dez[4], dez[5]]
      this.jogo8 = [dez[0], dez[1], dez[3], dez[4], dez[6]]
      this.jogo9 = [dez[0], dez[1], dez[3], dez[5], dez[6]]
      this.jogo10 = [dez[0], dez[1], dez[4], dez[5], dez[6]]
      this.jogo11 = [dez[0], dez[2], dez[3], dez[4], dez[5]]
      this.jogo12 = [dez[0], dez[2], dez[3], dez[4], dez[6]]
      this.jogo13 = [dez[0], dez[2], dez[3], dez[5], dez[6]]
      this.jogo14 = [dez[0], dez[2], dez[4], dez[5], dez[6]]
      this.jogo15 = [dez[0], dez[3], dez[4], dez[5], dez[6]]
      this.jogo16 = [dez[1], dez[2], dez[3], dez[4], dez[5]]
      this.jogo17 = [dez[1], dez[2], dez[3], dez[4], dez[6]]
      this.jogo18 = [dez[1], dez[2], dez[3], dez[5], dez[6]]
      this.jogo19 = [dez[1], dez[2], dez[4], dez[5], dez[6]]
      this.jogo20 = [dez[1], dez[3], dez[4], dez[5], dez[6]]
      this.jogo21 = [dez[2], dez[3], dez[4], dez[5], dez[6]]
      
      let fechamentos = [
        this.jogo1,
        this.jogo2,
        this.jogo3,
        this.jogo4,
        this.jogo5,
        this.jogo6,
        this.jogo7,
        this.jogo8,
        this.jogo9,
        this.jogo10,
        this.jogo11,
        this.jogo12,
        this.jogo13,
        this.jogo14,
        this.jogo15,
        this.jogo16,
        this.jogo17,
        this.jogo18,
        this.jogo19,
        this.jogo20,
        this.jogo21,
        
      ]
      resolve(fechamentos)
    })
  }

  callFechamentoQuina_10x2(dez) {
    
    //5 acertos 100% terno 
    return new Promise((resolve, reject) => {
      this.jogo1 = [dez[0], dez[5], dez[6], dez[7], dez[9]]
      this.jogo2 = [dez[1], dez[2], dez[3], dez[4], dez[8]]

      let fechamentos = [
        this.jogo1,
        this.jogo2,
      ]
      resolve(fechamentos)
    })
  }

  //LOTOMANIA

  callFechamentoLotomania_60x6(dez) {
    
    //se os 20 estiverem entre os 60 garantia de no minimo 17 pontos
    return new Promise((resolve, reject) => {
      this.jogo1 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[7], dez[9], dez[10], dez[11], dez[12], dez[13], dez[14], dez[15], dez[16], dez[17], dez[19], dez[21], dez[22], dez[23], dez[24], dez[25], dez[26], dez[27], dez[28], dez[29], dez[31], dez[33], dez[34], dez[35], dez[36], dez[37], dez[38], dez[39], dez[40], dez[41], dez[43], dez[45], dez[46], dez[47], dez[48], dez[49], dez[50], dez[51], dez[52], dez[53], dez[55], dez[57], dez[58], dez[59]]
      this.jogo2 = [dez[0], dez[1], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[11], dez[12], dez[13], dez[15], dez[16], dez[17], dez[18], dez[19], dez[20], dez[21], dez[23], dez[24], dez[25], dez[27], dez[28], dez[29], dez[30], dez[31], dez[32], dez[33], dez[35], dez[36], dez[37], dez[39], dez[40], dez[41], dez[42], dez[43], dez[44], dez[45], dez[47], dez[48], dez[49], dez[51], dez[52], dez[53], dez[54], dez[56], dez[56], dez[57], dez[59]]
      this.jogo3 = [dez[1], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[13], dez[15], dez[16], dez[17], dez[18], dez[19], dez[20], dez[21], dez[22], dez[23], dez[25], dez[27], dez[28], dez[29], dez[30], dez[31], dez[32], dez[33], dez[34], dez[35], dez[37], dez[39], dez[40], dez[41], dez[42], dez[43], dez[44], dez[45], dez[46], dez[47], dez[49], dez[51], dez[52], dez[53], dez[54], dez[55], dez[56], dez[57], dez[58], dez[59]]
      this.jogo4 = [dez[0], dez[1], dez[2], dez[4], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[14], dez[16], dez[18], dez[19], dez[20], dez[21], dez[22], dez[23], dez[24], dez[25], dez[26], dez[28], dez[30], dez[31], dez[32], dez[33], dez[34], dez[35], dez[36], dez[37], dez[38], dez[40], dez[42], dez[43], dez[44], dez[45], dez[46], dez[47], dez[48], dez[49], dez[50], dez[52], dez[54], dez[55], dez[56], dez[57], dez[58], dez[59]]
      this.jogo5 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[8], dez[9], dez[10], dez[12], dez[13], dez[14], dez[15], dez[16], dez[17], dez[18], dez[20], dez[21], dez[22], dez[24], dez[25], dez[26], dez[27], dez[28], dez[29], dez[30], dez[32], dez[33], dez[34], dez[36], dez[37], dez[38], dez[39], dez[40], dez[41], dez[42], dez[44], dez[45], dez[46], dez[48], dez[49], dez[50], dez[51], dez[52], dez[53], dez[54], dez[56], dez[57], dez[58]]
      this.jogo6 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[10], dez[11], dez[12], dez[13], dez[14], dez[15], dez[16], dez[17], dez[18], dez[19], dez[20], dez[22], dez[24], dez[25], dez[26], dez[27], dez[28], dez[29], dez[30], dez[31], dez[32], dez[34], dez[36], dez[37], dez[38], dez[39], dez[40], dez[41], dez[42], dez[44], dez[46], dez[48], dez[49], dez[50], dez[51], dez[52], dez[53], dez[54], dez[56], dez[56], dez[58]]

      let fechamentos = [
        this.jogo1,
        this.jogo2,
        this.jogo3,
        this.jogo4,
        this.jogo5,
        this.jogo6,
      ]
      resolve(fechamentos)
    })
  }

  callFechamentoLotomania_60x12(dez) {
    
    //se os 20 estiverem entre os 60 garantia de no minimo 18 pontos
    return new Promise((resolve, reject) => {
      this.jogo1 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[13], dez[16], dez[17], dez[20], dez[21], dez[22], dez[23], dez[24], dez[25], dez[27], dez[28], dez[29], dez[30], dez[32], dez[33], dez[34], dez[35], dez[36], dez[37], dez[38], dez[39], dez[40], dez[41], dez[42], dez[43], dez[44], dez[46], dez[47], dez[48], dez[49], dez[51], dez[52], dez[53], dez[54], dez[55], dez[56], dez[58], dez[59]]
      this.jogo2 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[10], dez[11], dez[12], dez[13], dez[14], dez[15], dez[18], dez[19], dez[20], dez[21], dez[22], dez[23], dez[24], dez[26], dez[27], dez[28], dez[29], dez[31], dez[33], dez[34], dez[35], dez[36], dez[37], dez[38], dez[39], dez[40], dez[41], dez[42], dez[44], dez[45], dez[47], dez[49], dez[50], dez[51], dez[52], dez[53], dez[54], dez[55], dez[57], dez[58], dez[59]]
      this.jogo3 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[9], dez[10], dez[11], dez[12], dez[13], dez[14], dez[15], dez[16], dez[17], dez[18], dez[20], dez[23], dez[24], dez[25], dez[26], dez[27], dez[28], dez[29], dez[30], dez[31], dez[32], dez[33], dez[34], dez[35], dez[36], dez[39], dez[41], dez[43], dez[45], dez[46], dez[47], dez[48], dez[49], dez[50], dez[51], dez[53], dez[54], dez[55], dez[56], dez[57], dez[58], dez[59]]
      this.jogo4 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[5], dez[8], dez[9], dez[10], dez[11], dez[12], dez[14], dez[15], dez[16], dez[17], dez[19], dez[20], dez[22], dez[23], dez[24], dez[25], dez[26], dez[27], dez[28], dez[29], dez[30], dez[31], dez[32], dez[34], dez[36], dez[37], dez[38], dez[39], dez[40], dez[41], dez[42], dez[43], dez[44], dez[45], dez[46], dez[48], dez[50], dez[51], dez[52], dez[53], dez[54], dez[55], dez[57], dez[58], dez[59]]
      this.jogo5 = [dez[0], dez[1], dez[2], dez[3], dez[4], dez[6], dez[7], dez[8], dez[10], dez[11], dez[12], dez[13], dez[14], dez[16], dez[17], dez[18], dez[19], dez[20], dez[23], dez[25], dez[26], dez[27], dez[28], dez[30], dez[31], dez[32], dez[33], dez[36], dez[37], dez[38], dez[39], dez[41], dez[42], dez[43], dez[44], dez[45], dez[46], dez[47], dez[48], dez[49], dez[50], dez[51], dez[52], dez[53], dez[54], dez[55], dez[56], dez[57], dez[58], dez[59]]
      this.jogo6 = [dez[0], dez[1], dez[2], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[11], dez[13], dez[14], dez[15], dez[16], dez[17], dez[19], dez[21], dez[22], dez[23], dez[24], dez[25], dez[26], dez[27], dez[28], dez[29], dez[30], dez[31], dez[32], dez[33], dez[34], dez[35], dez[36], dez[37], dez[38], dez[39], dez[40], dez[41], dez[42], dez[43], dez[44], dez[49], dez[50], dez[52], dez[53], dez[54], dez[55], dez[56], dez[57], dez[58], dez[59]]
      this.jogo7 = [dez[0], dez[1], dez[2], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[14], dez[15], dez[16], dez[17], dez[18], dez[19], dez[21], dez[22], dez[23], dez[24], dez[25], dez[26], dez[28], dez[29], dez[30], dez[31], dez[32], dez[33], dez[34], dez[35], dez[36], dez[38], dez[40], dez[41], dez[42], dez[43], dez[46], dez[47], dez[48], dez[49], dez[52], dez[53], dez[54], dez[55], dez[56], dez[57], dez[58], dez[59]]
      this.jogo8 = [dez[0], dez[1], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[11], dez[12], dez[13], dez[14], dez[15], dez[16], dez[17], dez[18], dez[19], dez[20], dez[21], dez[22], dez[23], dez[24], dez[25], dez[27], dez[28], dez[29], dez[30], dez[33], dez[34], dez[35], dez[37], dez[38], dez[39], dez[41], dez[43], dez[44], dez[45], dez[46], dez[47], dez[48], dez[49], dez[50], dez[52], dez[54], dez[55], dez[57], dez[58], dez[59]]
      this.jogo9 = [dez[0], dez[1], dez[3], dez[5], dez[6], dez[7], dez[9], dez[10], dez[11], dez[13], dez[14], dez[15], dez[16], dez[17], dez[18], dez[19], dez[20], dez[21], dez[22], dez[24], dez[25], dez[26], dez[27], dez[28], dez[29], dez[30], dez[31], dez[32], dez[33], dez[34], dez[36], dez[37], dez[38], dez[39], dez[40], dez[42], dez[43], dez[44], dez[45], dez[46], dez[48], dez[49], dez[50], dez[51], dez[52], dez[53], dez[54], dez[55], dez[56], dez[58]]
      this.jogo10 = [dez[0], dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[12], dez[14], dez[15], dez[17], dez[18], dez[19], dez[20], dez[21], dez[22], dez[23], dez[24], dez[25], dez[26], dez[27], dez[30], dez[31], dez[32], dez[33], dez[34], dez[36], dez[37], dez[38], dez[39], dez[41], dez[42], dez[43], dez[44], dez[45], dez[46], dez[47], dez[48], dez[49], dez[50], dez[51], dez[52], dez[53], dez[54], dez[56], dez[57], dez[58], dez[59]]
      this.jogo11 = [dez[1], dez[2], dez[3], dez[4], dez[5], dez[6], dez[8], dez[9], dez[10], dez[11], dez[13], dez[14], dez[15], dez[16], dez[17], dez[18], dez[21], dez[22], dez[23], dez[24], dez[25], dez[26], dez[27], dez[28], dez[29], dez[30], dez[31], dez[33], dez[34], dez[35], dez[36], dez[37], dez[38], dez[39], dez[40], dez[41], dez[42], dez[44], dez[45], dez[47], dez[48], dez[50], dez[51], dez[52], dez[53], dez[55], dez[56], dez[57], dez[58], dez[59]]
      this.jogo12 = [dez[2], dez[3], dez[4], dez[5], dez[6], dez[7], dez[8], dez[9], dez[10], dez[12], dez[14], dez[15], dez[16], dez[18], dez[19], dez[20], dez[21], dez[22], dez[23], dez[26], dez[27], dez[28], dez[29], dez[30], dez[31], dez[32], dez[33], dez[34], dez[35], dez[36], dez[37], dez[39], dez[40], dez[41], dez[42], dez[43], dez[44], dez[45], dez[46], dez[47], dez[48], dez[49], dez[50], dez[51], dez[53], dez[54], dez[55], dez[56], dez[57], dez[59]]

      let fechamentos = [
        this.jogo1,
        this.jogo2,
        this.jogo3,
        this.jogo4,
        this.jogo5,
        this.jogo6,
      ]
      resolve(fechamentos)
    })
  }

}
