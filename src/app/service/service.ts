import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
const apiUrl = "/dezenas-megasena";

@Injectable()
export class MegasenaService{
    private API_URL = 'http://127.0.0.1:8000/megasena'
    basepath = "/megasena"

    constructor(
        public http: Http,
        public httpCliente: HttpClient,
        private _platform:Platform
        ){
            console.log('platform:',_platform.is("cordova"))
            if(this._platform.is("cordova")){
                this.basepath = "http://127.0.0.1:8000/megasena";
            }
        }
    
    callFechamento(dezenas:any){
        //console.log('dezenas:',dezenas)
        return new Promise((resolve, reject)=>{
            let data = {
                dezenas:dezenas
            };
            console.log('data:',data)
            this.httpCliente.post(apiUrl, data.dezenas, httpOptions)
                .subscribe((result:any)=>{
                    console.log('post:',result)
                    resolve(result.json());
                },
                (error) => {
                    console.log('error:',error)
                    reject(error.json());
                });
        });
    }

    // callFechamento(dezenas:any){
    //     console.log('dezenas:',dezenas)
    //     return new Promise((resolve, reject)=>{
    //         var data = {
    //             dezenas:dezenas
    //         };
    //         this.http.post(this.API_URL, data)
    //             .subscribe((result:any)=>{
    //                 console.log('post:',result)
    //                 resolve(result.json());
    //             },
    //             (error) => {
    //                 console.log('error:',error)
    //                 reject(error.json());
    //             });
    //     });
    // }
}