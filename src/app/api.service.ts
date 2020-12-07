import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "/megasena";
const basepath = "/dezenas-megasena"

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private AWS_URL = 'http://apploteria-env.xqcciwrz2y.sa-east-1.elasticbeanstalk.com/core/'
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
        this.httpCliente.post(this.URL + 'megasena-12-6', data, httpOptions)
            .subscribe((result:any[])=>{
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
        this.httpCliente.post(this.URL + 'megasena-18-3-9', data, httpOptions)
            .subscribe((result:any[])=>{
                console.log('post:',result)
                resolve(result)
            },
            (error) => {
                console.log('error:',error)
                reject(error)
            });
    });
  }

  callFechamento9x12(dezenas:any){
    console.log('dezenas:',dezenas)
    return new Promise((resolve, reject)=>{
        let data = {
            dezenas:dezenas
        };
        console.log('data:',data)
        this.httpCliente.post(this.URL + 'megasena-9-12', data, httpOptions)
            .subscribe((result:any[])=>{
                console.log('post:',result)
                resolve(result)
            },
            (error) => {
                console.log('error:',error)
                reject(error)
            });
    });
  }
  callFechamento8x7(dezenas:any){
    console.log('dezenas:',dezenas)
    return new Promise((resolve, reject)=>{
        let data = {
            dezenas:dezenas
        };
        console.log('data:',data)
        this.httpCliente.post(this.URL + 'megasena-8-7', data, httpOptions)
            .subscribe((result:any[])=>{
                console.log('post:',result)
                resolve(result)
            },
            (error) => {
                console.log('error:',error)
                reject(error)
            });
    });
  }
  callFechamento10x3(dezenas:any){
    console.log('dezenas:',dezenas)
    return new Promise((resolve, reject)=>{
        let data = {
            dezenas:dezenas
        };
        console.log('data:',data)
        this.httpCliente.post(this.URL + 'megasena-10-3', data, httpOptions)
            .subscribe((result:any[])=>{
                console.log('post:',result)
                resolve(result)
            },
            (error) => {
                console.log('error:',error)
                reject(error)
            });
    });
  }
  callFechamento10x3_2(dezenas:any){
    let data = {
        dezenas:dezenas
    }
    const fechamentoObservable = new Observable(observer => {
        this.httpCliente.post(this.URL + 'megasena-10-3', data, httpOptions)
            .subscribe((result:any[])=>{
                observer.next(result)
            })
    })
    return fechamentoObservable;
  }

  callFechamento12x3x17(dezenas:any){
    console.log('dezenas:',dezenas)
    return new Promise((resolve, reject)=>{
        let data = {
            dezenas:dezenas
        };
        console.log('data:',data)
        this.httpCliente.post(this.URL + 'megasena-12-3-17', data, httpOptions)
            .subscribe((result:any[])=>{
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
        this.httpCliente.post(this.AWS_URL + 'lotofacil-22-8-12', data, httpOptions)
            .subscribe((result:any[])=>{
                console.log('post:',result)
                resolve(result)
            },
            (error) => {
                console.log('error:',error)
                reject(error)
            });
    });
  }

//   callServiceLotofacil_18x6(dezenas:any){
//     console.log('dezenas:',dezenas)
//     return new Promise((resolve, reject)=>{
//         let data = {
//             dezenas:dezenas
//         };
//         console.log('data:',data)
//         this.httpCliente.post(this.AWS_URL + 'lotofacil-18-6', data, httpOptions)
//             .subscribe((result:any[])=>{
//                 console.log('post:',result)
//                 resolve(result)
//             },
//             (error) => {
//                 console.log('error:',error)
//                 reject(error)
//             });
//     });
//   }

  callServiceLotofacil_18x6(dezenas:any){
    let data = {
        dezenas:dezenas
    }
    const fechamentoObservable = new Observable(observer => {
        this.httpCliente.post(this.AWS_URL + 'lotofacil-18-6', data, httpOptions)
            .subscribe((result:any[])=>{
                observer.next(result)
            })
    })
    return fechamentoObservable;
  }

  callServiceLotofacil_20x4(dezenas:any){
    console.log('dezenas:',dezenas)
    return new Promise((resolve, reject)=>{
        let data = {
            dezenas:dezenas
        };
        console.log('data:',data)
        this.httpCliente.post(this.AWS_URL + 'lotofacil-20-4', data, httpOptions)
            .subscribe((result:any[])=>{
                console.log('post:',result)
                resolve(result)
            },
            (error) => {
                console.log('error:',error)
                reject(error)
            });
    });
  }
  callServiceLotofacil_21x5(dezenas:any){
    console.log('dezenas:',dezenas)
    return new Promise((resolve, reject)=>{
        let data = {
            dezenas:dezenas
        };
        console.log('data:',data)
        this.httpCliente.post(this.AWS_URL + 'lotofacil-21-5', data, httpOptions)
            .subscribe((result:any[])=>{
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
        this.httpCliente.post(this.AWS_URL + 'lotofacil-18-12-5-6', data, httpOptions)
            .subscribe((result:any[])=>{
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
        this.httpCliente.post(this.AWS_URL + 'quina-10-19', data, httpOptions)
            .subscribe((result:any[])=>{
                console.log('post:',result)
                resolve(result)
            },
            (error) => {
                console.log('error:',error)
                reject(error)
            });
    });
  }
//   callServiceQuina_8x8(dezenas:any){
//     console.log('dezenas:',dezenas)
//     return new Promise((resolve, reject)=>{
//         let data = {
//             dezenas:dezenas
//         };
//         console.log('data:',data)
//         this.httpCliente.post(this.AWS_URL + 'quina-8-8', data, httpOptions)
//             .subscribe((result:any[])=>{
//                 console.log('post:',result)
//                 resolve(result)
//             },
//             (error) => {
//                 console.log('error:',error)
//                 reject(error)
//             });
//     });
//   }



  callServiceQuina_8x8(dezenas:any){
    let data = {
        dezenas:dezenas
    }
    const fechamentoObservable = new Observable(observer => {
        this.httpCliente.post(this.AWS_URL + 'quina-8-8', data, httpOptions)
            .subscribe((result:any[])=>{
                observer.next(result)
            })
    })
    return fechamentoObservable;
  }


  callServiceQuina_10x2(dezenas:any){
    console.log('dezenas:',dezenas)
    return new Promise((resolve, reject)=>{
        let data = {
            dezenas:dezenas
        };
        console.log('data:',data)
        this.httpCliente.post(this.AWS_URL +  'quina-10-2', data, httpOptions)
            .subscribe((result:any[])=>{
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
        this.httpCliente.post(this.AWS_URL + 'lotomania-100-6', data, httpOptions)
            .subscribe((result:any[])=>{
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
        this.httpCliente.post(this.AWS_URL + 'lotomania-90-10-6', data, httpOptions)
            .subscribe((result:any[])=>{
                console.log('post:',result)
                resolve(result)
            },
            (error) => {
                console.log('error:',error)
                reject(error)
            });
    });
  }

  //Verificadores

  callVerificadorMegasena(dezenas:any){
    console.log('dezenas:',dezenas)
    return new Promise((resolve, reject)=>{
        let data = {
            dezenas:dezenas
        };
        console.log('data:',data)
        this.httpCliente.post(this.AWS_URL + 'verificarmegasena', data, httpOptions)
            .subscribe((result:any[])=>{
                console.log('post verificador:',result)
                resolve(result)
            },
            (error) => {
                console.log('error:',error)
                reject(error)
            });
    });
  }

  callVerificadorLotofacil(dezenas:any){
    console.log('dezenas:',dezenas)
    return new Promise((resolve, reject)=>{
        let data = {
            dezenas:dezenas
        };
        console.log('data:',data)
        this.httpCliente.post(this.AWS_URL + 'verificarlotofacil', data, httpOptions)
            .subscribe((result:any[])=>{
                console.log('lotofacil verificador:',result)
                resolve(result)
            },
            (error) => {
                console.log('error:',error)
                reject(error)
            });
    });
  }
  callVerificadorQuina(dezenas:any){
    console.log('dezenas:',dezenas)
    return new Promise((resolve, reject)=>{
        let data = {
            dezenas:dezenas
        };
        console.log('data:',data)
        this.httpCliente.post(this.AWS_URL + 'verificarquina', data, httpOptions)
            .subscribe((result:any[])=>{
                console.log('quina verificador:',result)
                resolve(result)
            },
            (error) => {
                console.log('error:',error)
                reject(error)
            });
    });
  }
  callVerificadorLotomania(dezenas:any){
    console.log('dezenas:',dezenas)
    return new Promise((resolve, reject)=>{
        let data = {
            dezenas:dezenas
        };
        console.log('data:',data)
        this.httpCliente.post(this.URL + 'lotomaniaverificador', data, httpOptions)
            .subscribe((result:any[])=>{
                console.log('lotomania verificador:',result)
                resolve(result)
            },
            (error) => {
                console.log('error:',error)
                reject(error)
            });
    });
  }
}
