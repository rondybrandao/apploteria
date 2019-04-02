import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  consultasRef: AngularFireList<any> = null;
  constructor(
    private db: AngularFireDatabase
  ) { }

  getDezenasMes() {
    return new Promise<any>((resolve, reject)=>{
      let mega = this.db.list
      console.log("mega:",mega)
    })
  }

  getConsultasMes() {
    return this.consultasRef
        .snapshotChanges()
        .pipe(
            map(changes => {
                return changes
            })
        )
        .subscribe(val => {
                 let consulta = val;
                 console.log('consultas2:',consulta)
               });
}
  
}
