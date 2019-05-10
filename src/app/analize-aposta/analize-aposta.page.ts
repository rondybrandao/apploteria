import { FirebaseService } from './../servicos/firebase.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastController, NavController, LoadingController } from '@ionic/angular';

import { Chart } from 'chart.js';
import { Router } from '@angular/router';


@Component({
  selector: 'app-analize-aposta',
  templateUrl: './analize-aposta.page.html',
  styleUrls: ['./analize-aposta.page.scss'],
})
export class AnalizeApostaPage implements OnInit {
  
  @Input('progress') progress = 5;

  @ViewChild('chartLineAposta') chartLineAposta;
  @ViewChild('chartLineUltimasAposta') chartLineUltimasAposta;
  @ViewChild('verificar') verificar

  lineChartAposta: any;
  lineChartUltimasAposta: any;
  apos = []
  dezenas = []
  
  apostas = []
  concurso_pontos = []
  entrada_usuario = []
  data_dezenas = []
  data_ultimas = []
  ultimos_sorteios = []
  sorteio = []
  dezena = []
  dez1 = []
  dez2 = []
  dez3 = []
  dez4 = []
  dez5 = []
  dez6 = []
  
  public form = [
    { id: 0, val: '01', checked: false },
    { id: 1, val: '02', checked: false },
    { id: 2, val: '03', checked: false },
    { id: 3, val: '04', checked: false },
    { id: 4, val: '05', checked: false },
    { id: 5, val: '06', checked: false },
    { id: 6, val: '07', checked: false },
    { id: 7, val: '08', checked: false },
    { id: 8, val: '09', checked: false },
    { id: 9, val: '10', checked: false },
    { id: 10, val: '11', checked: false },
    { id: 11, val: '12', checked: false },
    { id: 12, val: '13', checked: false },
    { id: 13, val: '14', checked: false },
    { id: 14, val: '15', checked: false },
    { id: 15, val: '16', checked: false },
    { id: 16, val: '17', checked: false },
    { id: 17, val: '18', checked: false },
    { id: 18, val: '19', checked: false },
    { id: 19, val: '20', checked: false },
    { id: 20, val: '21', checked: false },
    { id: 21, val: '22', checked: false },
    { id: 22, val: '23', checked: false },
    { id: 23, val: '24', checked: false },
    { id: 24, val: '25', checked: false },
    { id: 25, val: '26', checked: false },
    { id: 26, val: '27', checked: false },
    { id: 27, val: '28', checked: false },
    { id: 28, val: '29', checked: false },
    { id: 29, val: '30', checked: false },
    { id: 30, val: '31', checked: false },
    { id: 31, val: '32', checked: false },
    { id: 32, val: '33', checked: false },
    { id: 33, val: '34', checked: false },
    { id: 34, val: '35', checked: false },
    { id: 35, val: '36', checked: false },
    { id: 36, val: '37', checked: false },
    { id: 37, val: '38', checked: false },
    { id: 38, val: '39', checked: false },
    { id: 39, val: '40', checked: false },
    { id: 40, val: '41', checked: false },
    { id: 41, val: '42', checked: false },
    { id: 42, val: '43', checked: false },
    { id: 43, val: '44', checked: false },
    { id: 44, val: '45', checked: false },
    { id: 45, val: '46', checked: false },
    { id: 46, val: '47', checked: false },
    { id: 47, val: '48', checked: false },
    { id: 48, val: '49', checked: false },
    { id: 49, val: '50', checked: false },
    { id: 50, val: '51', checked: false },
    { id: 51, val: '52', checked: false },
    { id: 52, val: '53', checked: false },
    { id: 53, val: '54', checked: false },
    { id: 54, val: '55', checked: false },
    { id: 55, val: '56', checked: false },
    { id: 56, val: '57', checked: false },
    { id: 57, val: '58', checked: false },
    { id: 58, val: '59', checked: false },
    { id: 59, val: '60', checked: false }
  ];
  constructor(
    public apiService: ApiService,
    public toastController:ToastController,
    public navCtrl: NavController,
    public firebaseService: FirebaseService,
    public loadingController: LoadingController,
    private router: Router
  ) {

  }

  ngOnInit() {}
  
  // presentLoadingCustom() {
  //   let loading = this.loadingCtrl.create({
  //     spinner: 'dots',
    
  //     duration: 3000
  //   });
  
  //   loading.onDidDismiss(() => {
      
  //     //this.showLineLucro();
  //     //this.showLine();
  //   });
  //   loading.present();
  // }
  voltar(){
    this.navCtrl.navigateBack('verificador');
  }
  async presentLoading(result) {
    const loading = await this.loadingController.create({
      message: 'Analizando dezenas',
      duration: 2000
    });
    await loading.present();
    this.apostas = result;
    this.showLineAposta();
  
  }

  onFilterChange(eve: any){
      this.form[eve.id].checked = !this.form[eve.id].checked
      if (eve.checked){
        this.entrada_usuario.push(eve.val)
      } else {
        let index = this.entrada_usuario.indexOf(eve.val);
        //console.log("index:",index);
        this.entrada_usuario.splice(index, 1)
        
      }
  }

  async presentToastVerificador() {
    const toast = await this.toastController.create({
      message: 'ERRO!: ESCOLHA 6 DEZENAS!.',
      duration: 3000,
      position: "middle"
    });
    toast.present();
  }

  verificarDezenas(){
    if (this.entrada_usuario.length == 6){
      this.apiService.callVerificadorMegasena(this.entrada_usuario)
      .then((result:any[])=>{
        this.verificarLoading(result)
        //this.router.navigate(['analize-aposta'])
      })
      .catch((error:any)=>{
        console.log('error:',error)
      });
    }
    else {
      this.presentToastVerificador()
    }
  }

  async verificarLoading(result) {
    const loading = await this.loadingController.create({
      message: 'Analizando dezenas',
      duration: 2000
    });
    await loading.present();
    this.apostas=result;
  }

  teste_analize(){
    console.log(this.getDezenasMes2(this.entrada_usuario))
  }

  getConsulta(){
    this.firebaseService.getDezenasMes().then((result:any)=>{
      this.dez1 = result[0]
      this.dez2 = result[1]
      this.dez3 = result[2]
      this.dez4 = result[3]
      this.dez5 = result[4]
      this.dez6 = result[5]
    })
    //this.presentLoading()
  }
  getDezenasMes2(entrada){
    
    this.firebaseService.getDezenasMes2(entrada).then((result:any)=>{
      console.log(result)
      this.dezena = result
      //console.log(this.dezena[0].dezena)
      this.dez1 = result[0].total
      this.dez2 = result[1].total
      this.dez3 = result[2].total
      this.dez4 = result[3].total
      this.dez5 = result[4].total
      this.dez6 = result[5].total
    })
    this.presentLoading(this.apos)
    
  }
  // getConsultaDezena(){
  //   let res = this.firebaseService.getConsultaDezena().then((result:any)=>{
  //     console.log(result);
  //     result['marco'].chave.split(" ").forEach(dia => {
  //         console.log(dia);
  //         ["01","02","03","05","06","07"].forEach(el => {
  //           result['marco'][dia].split(" ").forEach(element => {
  //             if (element == el){
  //               if (this.ultimos_sorteios[dia]) {
  //                   this.ultimos_sorteios[dia].push(el)
  //               } else {
  //                 this.ultimos_sorteios[dia]=el;
  //               }
                
  //               console.log(this.ultimos_sorteios)
  //               this.sorteio.push({dia:dia, dez:el})
              
  //             }
  //           });
            
  //         });
       
  //     });
      
  //   })
  // }
  // getDezenasMes() {
  //   let cont = 0
  //   const cons = this.firebaseService.getDezenasMes()
  //     .then((result:any)=>{
  //       console.log(result);
  //       let res = result[1].chave;
  //       let c = [];
  //       c.push(res.split(" "));
  //       c.forEach(element => {
  //         this.data_dezenas.push(result['1'][element[0]])
  //         this.data_dezenas.push(result['1'][element[1]])
  //         this.data_dezenas.push(result['1'][element[2]])
  //         this.data_dezenas.push(result['1'][element[3]])
  //         this.data_dezenas.push(result['1'][element[4]])
          
  //       });
  //       this.data_dezenas.forEach(element => {
  //         console.log(element);
  //         let e = element.split(" ");
  //         console.log(e);
  //         ["02", "04", "06", "08", "09", "10"].forEach(el => {
  //           let index = ["02", "04", "06", "08", "09", "10"].indexOf(el);
  //           e.forEach(e => {
  //             if (e == el){
  //               console.log(e + "=" + el)
  //               this.data_ultimas.push(e);
  //               let bol = []
  //               bol[index] = cont++
  //               console.log(bol)
  //             }
  //           });
            
  //         });
          
  //       });
  
  //     })
  // }
  
  showLineAposta(){
    this.lineChartAposta = new Chart(this.chartLineAposta.nativeElement, {
 
      type: 'line',
      data: {
          labels: ['JAN', 'FEV', 'MAR', 'ABR'],
          //labels: this.datas,
          datasets: [{
            backgroundColor: 'rgba(156, 195, 20, 1.0)',
            
            data: this.dez1,
            label: this.dezena[0].dezena
          }, {
            backgroundColor:'rgba(176, 71, 33, 1.0)',
            
            data:this.dez2,
            label: this.dezena[1].dezena,
            fill: '-1'
          }, {
            backgroundColor:'rgba(182, 46, 235, 1.0)',
            
            data: this.dez3,
            label: this.dezena[2].dezena,
            fill: 1
          }, {
            backgroundColor: 'rgba(47, 198, 67, 1.0)',
            
            data: this.dez4,
            label: this.dezena[3].dezena,
            fill: '-1'
          }, {
            backgroundColor: 'rgba(81, 46, 34, 1.0)',
            
            data: this.dez5,
            label: this.dezena[4].dezena,
            fill: '-1'
          }, {
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            
            data: this.dez6,
            label: this.dezena[5].dezena,
            fill: '+2'
          }]
      },
      options: {
        maintainAspectRatio: false,
        spanGaps: false,
        elements: {
          line: {
            tension: 0.000001
          }
        },
				scales: {
					xAxes: [{
	
						ticks: {
							source: 'labels'
						}
					}],
					yAxes: [{
						stacked: true,
					}]
        },
        plugins: {
          filler: {
            propagate: false
          },
          'samples-filler-analyser': {
            target: 'chart-analyser'
          }
        }
			}

  });
}

// showLineUltimasAposta(){
//   this.lineChartAposta = new Chart((this.chartLineUltimasAposta.nativeElement).getContext('2d'), {

//     type: 'line',
//     data: {
//         labels: ['03/01', '03/03', '03/05', '03/07', '03/10'],
//         //labels: this.datas,
//         datasets: [{
//           backgroundColor: 'rgba(156, 195, 20, 1.0)',
//           pointRadius: 10,
// 					pointHoverRadius: 15,
// 					showLine: false, // no line shown
//           data: [parseInt(this.data_ultimas[0])],
//           label: 'D0',
//           fill: false
//         }, {
//           backgroundColor:'rgba(176, 71, 33, 1.0)',
//           pointRadius: 10,
// 					pointHoverRadius: 15,
// 					showLine: false, // no line shown
//           data:[],
//           label: 'D1',
//           fill: false
//         }, {
//           backgroundColor:'rgba(182, 46, 235, 1.0)',
          
// 					showLine: false, // no line shown
//           data: [],
//           pointRadius: 10,
// 					pointHoverRadius: 15,
//           label: 'D2',
//           fill: false
//         }, {
//           backgroundColor: 'rgba(47, 198, 67, 1.0)',
//           pointRadius: 10,
// 					pointHoverRadius: 15,
// 					showLine: false, // no line shown
//           data: [],
//           label: 'D3',
//           fill: false
//         }, {
//           backgroundColor: 'rgba(81, 46, 34, 1.0)',
//           pointRadius: 10,
// 					pointHoverRadius: 15,
// 					showLine: false, // no line shown
//           data: [],
//           label: 'D4',
//           fill: false
//         }, {
//           backgroundColor: 'rgba(255, 159, 64, 0.2)',
//           pointRadius: 10,
// 					pointHoverRadius: 15,
// 					showLine: false, // no line shown
//           data: [],
//           label: 'D5',
//           fill: false,
//           pointStyle: 'triangle'
//         }]
//     },
//     options: {
//       maintainAspectRatio: false,
//       spanGaps: false,
//       elements: {
//         point: {
//           pointStyle: 'circle'
//         }
//       },
      
//     }

// });
// }

}

export const snapshot = result => {
  let item = result;
  
  return item;
}
