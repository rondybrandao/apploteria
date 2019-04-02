import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-esoterico',
  templateUrl: './esoterico.page.html',
  styleUrls: ['./esoterico.page.scss'],
})
export class EsotericoPage implements OnInit {
  numero_cabalistico = 0
  assinatura: string = ''
  dezenas_cabala
  lotofacil_check = false
  megasena_check = false
  quina_check = false
  aposta = []
  numerologia = {
    a : 1,
    b : 2,
    c : 3,
    d : 4,
    e : 5,
    f : 6,
    g : 7,
    h : 8,
    i : 9,
    j : 9,
    k : 10,
    l : 20,
    m : 30,
    n : 40,
    o : 50,
    p : 60,
    q : 70,
    r : 80,
    s : 90,
    t : 100,
    u : 200,
    v : 200,
    w : 200,
    x : 300,
    y : 9,
    z : 400,
    ã : 1,
    õ : 50
  }
  constructor(
    public apiService: ApiService,
    private router: Router

  ) { 
  }

  ngOnInit() {
  }
  voltar(){
    this.router.navigate(['home'])
  }
  gerar_megasena_aleatorio(){
    let result: any
    let min = Math.ceil(1);
    let max = Math.floor(60);
    result = Math.floor(Math.random() * max - min + 1) + min;
    console.log('result:', result);
    return result
  }

  gerar_quina_aleatorio(){
    let result: any
    let min = Math.ceil(1);
    let max = Math.floor(80);
    result = Math.floor(Math.random() * max - min + 1) + min;
    console.log('result:', result);
    return result
  }

  gerar_lotofacil_aleatorio(){
    let result: any
    let min = Math.ceil(1);
    let max = Math.floor(25);
    result = Math.floor(Math.random() * max - min + 1) + min;
    console.log('result:', result);
    return result
  }

  megasena_aleatorio(valor){
    let al: any
    let dezenas = []
    for (let i=1; i<=6; i++){
      al = this.gerar_megasena_aleatorio();
      al = al + valor
      dezenas.push(al)
    }
    console.log('dezena:', dezenas);
    this.callServiceVerificadorMegasena(dezenas);
    this.dezenas_cabala = dezenas
  }

  quina_aleatorio(valor){
    let al: any
    let dezenas = []
    for (let i=1; i<=5; i++){
      al = this.gerar_quina_aleatorio();
      al = al + valor
      dezenas.push(al)
    }
    console.log('dezena:', dezenas);
    this.callServiceVerificadorQuina(dezenas)
    this.dezenas_cabala = dezenas
  }

  lotofacil_aleatorio(valor){
    let al: any
    let dezenas = []
    for (let i=1; i<=15; i++){
      al = this.gerar_lotofacil_aleatorio();
      al = al + valor
      dezenas.push(al)
    }
    console.log('dezena:', dezenas);
    this.callServiceVerificadorLotofacil(dezenas)
    this.dezenas_cabala = dezenas
  }
  calc_cabala(valor){
    let num_cabala = 0
    let v = String(valor).split('');
    v.forEach(e => {
      let n = parseInt(e);
      num_cabala = num_cabala + n;
    });
    this.numero_cabalistico = num_cabala
    return num_cabala
  }
  // numerologia_cabala(nome:any){
  //   let arr = nome.replace(/\s/g, "").split('')
  //   console.log('arr', arr)
  //   let num = 0
  //   let num2
  //   let num_cabala = 0
  //   arr.forEach(element => {
  //     console.log(this.numerologia[element]);
  //     let n = this.numerologia[element]
  //     num = num + n
  //   });
  //   //num2 = String(num).split('');
  //   let r = this.calc_cabala(num)
  //   console.log(r)
  //   if (String(r).split('').length > 1){
  //     this.calc_cabala(r)
  //     console.log(r)
  //   }
  //   console.log('retorno', this.numero_cabalistico)
  //   this.megasena_aleatorio()
  // }

  numerologia_cabala(nome:any){
    let arr = nome.toLowerCase().replace(/\s/g, "").split('')
    console.log('arr', arr)
    let num = 0
    let num2
    let num_cabala = 0
    arr.forEach(element => {
      console.log(this.numerologia[element]);
      let n = this.numerologia[element]
      num = num + n
    });
    //num2 = String(num).split('');
    let r = this.calc_cabala(num)
    console.log(r)
    if (String(r).split('').length > 1){
      this.calc_cabala(r)
      console.log(r)
    }
    console.log('retorno', this.numero_cabalistico)
    return this.numero_cabalistico
  }

  quina(f: NgForm){
    let num_cabala
    num_cabala = this.numerologia_cabala(f.value.assinatura);
    console.log('numero quina cabala:', num_cabala);
    this.quina_aleatorio(num_cabala)
  }

  lotofacil(f: NgForm){
    let num_cabala;
    num_cabala = this.numerologia_cabala(f.value.assinatura);
    this.lotofacil_aleatorio(num_cabala)
  }

  megasena(f: NgForm){
    let num_cabala
    num_cabala = this.numerologia_cabala(f.value.assinatura);
    this.megasena_aleatorio(num_cabala);
  }

  callServiceVerificadorMegasena(valor){
    this.apiService.callVerificadorMegasena(valor)
      .then((result:any[])=>{
        console.log('result',result);
        this.megasena_check = true; 
        this.lotofacil_check = false;
        this.quina_check = false;
        this.aposta = result;
      })
      .catch((error:any)=>{
        console.log('error:',error)
      });
  }
  callServiceVerificadorLotofacil(valor){
    this.apiService.callVerificadorLotofacil(valor)
      .then((result:any[])=>{
        console.log('result',result);
        this.lotofacil_check = true;
        this.megasena_check = false;
        this.quina_check = false;
        this.aposta = result;
      })
      .catch((error:any)=>{
        console.log('error:',error)
      });
  }
  callServiceVerificadorQuina(valor){
    this.apiService.callVerificadorQuina(valor)
      .then((result:any[])=>{
        console.log('result',result);
        this.quina_check = true;
        this.lotofacil_check = false;
        this.megasena_check = false;
        this.aposta = result;
      })
      .catch((error:any)=>{
        console.log('error:',error)
      });
  }

}
