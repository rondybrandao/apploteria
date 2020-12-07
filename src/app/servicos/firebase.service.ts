import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
//import * as firebase from 'firebase';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
  
})
export class FirebaseService {
  // consultasRef: AngularFireList<any> = null;
  consultasRef: any;
  info = {}
  chave = []
  constructor(
    private db: AngularFireDatabase
  ) { }

  getDezenasMes() {
    let ar = ["01","02","03","04"]
    let result = []
    return new Promise<any>((resolve, reject)=>{
      let mega = this.db.list('megasena/');
      //console.log(mega)
      mega.valueChanges().subscribe(res => {
        let re = res[0];
        ar.forEach(element => {
          //console.log(element)
          let d = toInt(re[element])
          result.push(d)
        });
        //console.log(result)  
      resolve(result)
      })
    })
  }
  getDezenasMes2(entrada: any) {
    console.log(entrada)
    let ar = ["01","02","03","04","05","06"]
    let result = []
    let r = []
    return new Promise<any>((resolve, reject)=>{
      let mega = this.db.list('megasena/');
      console.log(mega)
      mega.valueChanges().subscribe(res => {
        console.log(res[0])
        let re = res[1];
        entrada.forEach(element => {
          console.log(element);
          let d = toInt(re[element]);
          r.push({dezena:element, total:d})
          console.log(r);
          result.push(r)
        });
      resolve(r)
      })
    })
  }
  getDezenasQuinaMes(entrada: any) {
    console.log(entrada)
    let result = []
    let r = []
    return new Promise<any>((resolve, reject)=>{
      let mega = this.db.list('quina/');
      console.log(mega)
      mega.valueChanges().subscribe(res => {
        console.log(res[0])
        let re = res[1];
        entrada.forEach(element => {
          console.log(element);
          let d = toInt(re[element]);
          r.push({dezena:element, total:d})
          console.log(r);
          result.push(r)
        });
      resolve(r)
      })
    })
  }

  getConsultasMes() {
    const consulta = this.consultasRef = this.db.list('megasena/')
    .snapshotChanges().pipe(map(value => {
      //console.log(value)
    }))
   return consulta
    
}
  getConsultaDezena() {
  return new Promise<any>((resolve,reject)=>{
    firebase.database().ref('megasena/').on('value', resp => {
      let res = snapshotToDezena(resp);
      //console.log(res);
      resolve(res)
    });
  })
  }

  getSorteioCorrente() {
    return new Promise<any>((resolve, reject)=>{
      firebase.database().ref('megasena/sorteio-corrente/').on('value', resp => {
        let res = snapshotToDezena(resp);
        console.log(res)
        resolve(res)
      })
    })
  }

  getDezenasCorrente() {
    return new Promise<any>((resolve, reject)=>{
      firebase.database().ref('megasena/dezenas-corrente/').on('value', resp =>{
        let res = toIntDezenasCorrente(resp)
        console.log(res)
        resolve(res)
      })
    })
  }

  getSorteioCorrenteLoteria(loteria) {
    return new Promise<any>((resolve, reject)=>{
      firebase.database().ref(loteria + '/sorteio-corrente/').on('value', resp => {
        let res = snapshotToDezena(resp);
        console.log(res)
        resolve(res)
      })
    })
  }

  getDezenasCorrenteLoteria(loteria) {
    return new Promise<any>((resolve, reject)=>{
      firebase.database().ref(loteria + '/dezenas-corrente/').on('value', resp =>{
        let res = toIntDezenasCorrente(resp)
        console.log(res)
        resolve(res)
      })
    })
  }

  getSorteioAtual(loteria) {
    return new Promise((resolve, reject)=>{
      firebase.database().ref(loteria + '/sorteio-atual/').on('value', res=>{
        console.log(res.val())
        let d = res.val().dezenas
        console.log(d)
        let dezenas = toIntLoto(d)
        console.log(dezenas)
        let obj = {
          dezenas: dezenas,
          numero: res.val().numero
        }
        resolve(obj)
        reject(false)
      })
    })
  }

  getResultados() {
    return new Promise((resolve, reject)=>{
      firebase.database().ref('resultados').on('value', res=>{
        let d = res.val().lotofacil.dezenas
        let m = res.val().megasena.dezenas
        let lm = res.val().lotomania.dezenas
        let q = res.val().quina.dezenas

        let nLotofacil = res.val().lotofacil.numero
        let nMegasena = res.val().megasena.numero
        let nLotomania = res.val().lotomania.numero
        let nQuina = res.val().quina.numero
        
        let dezenas_lotofacil = toIntLoto(d)
        let dezenas_megasena = toIntLoto(m)
        let dezenas_lotomania = toIntLoto(lm)
        let dezenas_quina = toIntLoto(q)
        
        let obj = {
          lotofacil: {
            dezenas:dezenas_lotofacil,
            numero: nLotofacil
          },
          megasena: {
            dezenas:dezenas_megasena,
            numero: nMegasena
          },
          lotomania: {
            dezenas:dezenas_lotomania,
            numero: nLotomania
          },
          quina: {
            dezenas:dezenas_quina,
            numero: nQuina
          }
          
        }
        resolve(obj)
        reject(false)
      })
    })
  }

  getDezenasMegasenaMaisFrequentes(){
    return new Promise((resolve, reject)=>{
      firebase.database().ref('megasena').child('maisfrequentes').once('value', res =>{
        console.log(res.val())
        let r = res.val()
        let dezenas = toIntLoto(r)
        console.log(dezenas)
        resolve(dezenas)
      })
    })
  }

  getDezenasLotofacilMaisFrequentes(){
    return new Promise((resolve, reject)=>{
      firebase.database().ref('lotofacil').child('maisfrequentes').on('value', res =>{
        console.log(res.val())
        let r = res.val()
        let dezenas = toIntLoto(r)
        console.log(dezenas)
        resolve(dezenas)
      })
    })
  }

  getDezenasQuinaMaisFrequentes(){
    return new Promise((resolve, reject)=>{
      firebase.database().ref('quina').child('maisfrequentes').once('value', res =>{
        console.log(res.val())
        let r = res.val()
        let dezenas = toIntLoto(r)
        console.log(dezenas)
        resolve(dezenas)
      })
    })
  }
}
export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  item.key = snapshot.key;
  return item;
}
export const snapshotToDezena = snapshot => {
  let item = snapshot.val()
  //console.log(item);
  return item;
}
export const toInt = snapshot => {
  console.log(snapshot);
  let item = snapshot.split(",")
  let res = [];
  item.forEach(element => {
    res.push(parseInt(element))
  });
  return item
}
export const toIntDezenasCorrente = snapshot => {
  let item = snapshot.val();
  console.log(item)
  item = item.split(" ")
  let res = []
  item.forEach(element => {
    res.push(parseInt(element))
  });

  return item 
}

export const toIntLoto = snapshot => {
  let item = snapshot.split(" ")
  let res = []
  item.forEach(element => {
    res.push(element)
  });

  return res 
}
