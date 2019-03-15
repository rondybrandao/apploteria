import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "/megasena";
const basepath = "/dezenas-megasena"

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URL = 'http://127.0.0.1:8000/megasena'
  private API_URL_18x3x9 = 'http://127.0.0.1:8000/fechamento18-3-9'
  private API_URL_lotofacil_22x8x6 = 'http://127.0.0.1:8000/lotofacil-22-8-6'
  private API_URL_qui_18x12x5x6 = 'http://127.0.0.1:8000/quina-18-12-5-6'
  private API_URL_qui_10x19 = 'http://127.0.0.1:8000/quina-10-19'

  private URL = 'http://127.0.0.1:8000/'
  constructor(
    public httpCliente: HttpClient,
  ) { }

  callFechamento(dezenas:any){
    console.log('dezenas:',dezenas)
    return new Promise((resolve, reject)=>{
        let data = {
            dezenas:dezenas
        };
        console.log('data:',data)
        this.httpCliente.post(this.API_URL, data, httpOptions)
            .subscribe((result:any)=>{
                console.log('post:',result)
                resolve(result)
            },
            (error) => {
                console.log('error:',error)
                reject(error)
            });
    });
  }

  callFechamento18x3x9(dezenas:any){
    console.log('dezenas:',dezenas)
    return new Promise((resolve, reject)=>{
        let data = {
            dezenas:dezenas
        };
        console.log('data:',data)
        this.httpCliente.post(this.API_URL_18x3x9, data, httpOptions)
            .subscribe((result:any)=>{
                console.log('post:',result)
                resolve(result)
            },
            (error) => {
                console.log('error:',error)
                reject(error)
            });
    });
  }
  callServiceLotofacil_22x8x6(dezenas:any){
    console.log('dezenas:',dezenas)
    return new Promise((resolve, reject)=>{
        let data = {
            dezenas:dezenas
        };
        console.log('data:',data)
        this.httpCliente.post(this.API_URL_lotofacil_22x8x6, data, httpOptions)
            .subscribe((result:any)=>{
                console.log('post:',result)
                resolve(result)
            },
            (error) => {
                console.log('error:',error)
                reject(error)
            });
    });
  }

  callServiceQuina_18x12x5x6(dezenas:any){
    console.log('dezenas:',dezenas)
    return new Promise((resolve, reject)=>{
        let data = {
            dezenas:dezenas
        };
        console.log('data:',data)
        this.httpCliente.post(this.API_URL_qui_18x12x5x6, data, httpOptions)
            .subscribe((result:any)=>{
                console.log('post:',result)
                resolve(result)
            },
            (error) => {
                console.log('error:',error)
                reject(error)
            });
    });
  }

  callServiceQuina_10x19(dezenas:any){
    console.log('dezenas:',dezenas)
    return new Promise((resolve, reject)=>{
        let data = {
            dezenas:dezenas
        };
        console.log('data:',data)
        this.httpCliente.post(this.API_URL_qui_10x19, data, httpOptions)
            .subscribe((result:any)=>{
                console.log('post:',result)
                resolve(result)
            },
            (error) => {
                console.log('error:',error)
                reject(error)
            });
    });
  }

  callServiceLotomania_100x6(dezenas:any){
    console.log('dezenas:',dezenas)
    return new Promise((resolve, reject)=>{
        let data = {
            dezenas:dezenas
        };
        console.log('data:',data)
        this.httpCliente.post(this.URL + 'lotomania-100-6', data, httpOptions)
            .subscribe((result:any)=>{
                console.log('post:',result)
                resolve(result)
            },
            (error) => {
                console.log('error:',error)
                reject(error)
            });
    });
  }

  callServiceLotomania_90x10x6(dezenas:any){
    console.log('dezenas:',dezenas)
    return new Promise((resolve, reject)=>{
        let data = {
            dezenas:dezenas
        };
        console.log('data:',data)
        this.httpCliente.post(this.URL + 'lotomania-90-10-6', data, httpOptions)
            .subscribe((result:any)=>{
                console.log('post:',result)
                resolve(result)
            },
            (error) => {
                console.log('error:',error)
                reject(error)
            });
    });
  }


}