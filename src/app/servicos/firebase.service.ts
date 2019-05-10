import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
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
