import { FirebaseService } from './../servicos/firebase.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastController, NavController, LoadingController, ModalController } from '@ionic/angular';

import { Chart } from 'chart.js';
import { ModalAnalizeQuinaPage } from '../modal-analize-quina/modal-analize-quina.page';

@Component({
  selector: 'app-analize-quina',
  templateUrl: './analize-quina.page.html',
  styleUrls: ['./analize-quina.page.scss'],
})
export class AnalizeQuinaPage implements OnInit {
  
  @ViewChild('chartLineAposta') chartLineAposta;
  @ViewChild('verificar') verificar;
  
  
  lineChartAposta: any;
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
    { id: 59, val: '60', checked: false },
    { id: 60, val: '61', checked: false },
    { id: 61, val: '62', checked: false },
    { id: 62, val: '63', checked: false },
    { id: 63, val: '64', checked: false },
    { id: 64, val: '65', checked: false },
    { id: 65, val: '66', checked: false },
    { id: 66, val: '67', checked: false },
    { id: 67, val: '68', checked: false },
    { id: 68, val: '69', checked: false },
    { id: 69, val: '70', checked: false },
    { id: 70, val: '71', checked: false },
    { id: 71, val: '72', checked: false },
    { id: 72, val: '73', checked: false },
    { id: 73, val: '74', checked: false },
    { id: 74, val: '75', checked: false },
    { id: 75, val: '76', checked: false },
    { id: 76, val: '77', checked: false },
    { id: 77, val: '78', checked: false },
    { id: 78, val: '79', checked: false },
    { id: 79, val: '80', checked: false }
    
  ];
  constructor(
    public apiService: ApiService,
    public toastController:ToastController,
    public navCtrl: NavController,
    public firebaseService: FirebaseService,
    public loadingController: LoadingController,
    private modalController: ModalController
  )  {}

  ngOnInit() {
  }

  voltar(){
    this.navCtrl.navigateBack('verificador');
  }
  // async presentLoading() {
  //   const loading = await this.loadingController.create({
  //     message: 'Analizando dezenas',
  //     duration: 2000
  //   });
  //   await loading.present();
  //   this.showLineAposta();
  //   const { role, data } = await loading.onDidDismiss()
  // }

  async modalPage() {
    const modal = await this.modalController.create({
      component: ModalAnalizeQuinaPage,
      componentProps: {
        value: this.verificar, 
        dezena: this.dezena
      }
    });
    await modal.present();
  }

  onFilterChange(eve: any){
    console.log("id:",this.form[eve.id])
      this.form[eve.id].checked = !this.form[eve.id].checked
      console.log('evento:',eve)
      if (eve.checked){
        this.entrada_usuario.push(eve.val)
      } else {
        let index = this.entrada_usuario.indexOf(eve.val);
        //console.log("index:",index);
        this.entrada_usuario.splice(index, 1)
        
      }
      console.log('entrada_usuario:', this.entrada_usuario)
  }

  async presentToastVerificador() {
    const toast = await this.toastController.create({
      message: 'ERRO!: ESCOLHA 5 DEZENAS!.',
      duration: 3000,
      position: "middle"
    });
    toast.present();
  }
  
  getDezenasQuinaMes(entrada){
    this.firebaseService.getDezenasMes2(entrada).then((result:any)=>{
      //console.log(result)
      this.dezena = result
      //console.log(this.dezena[0].dezena)
      // this.dez1 = result[0].total
      // this.dez2 = result[1].total
      // this.dez3 = result[2].total
      // this.dez4 = result[3].total
      // this.dez5 = result[4].total
    })
  }
  verificarDezenas(){
    if (this.entrada_usuario.length == 5){
      this.getDezenasQuinaMes(this.entrada_usuario);
      this.apiService.callVerificadorQuina(this.entrada_usuario)
      .then((result:any[])=>{
        this.verificar = result
        this.modalPage()
  
        //this.showLineAposta();
      })
      .catch((error:any)=>{
        console.log('error:',error)
      });
    
    }
    else {
      this.presentToastVerificador()
    }
  }
  verificarDezenas2(){
    
    if (this.entrada_usuario.length == 5){
      this.firebaseService.getDezenasMes2(this.entrada_usuario).then((result:any)=>{
        this.dezena = result
        this.loadingVerificar()
      })
    }
    else {
      this.presentToastVerificador()
    }
  }
  async loadingVerificar() {
    const loading = await this.loadingController.create({
      message: 'Analizando dezenas',
      duration: 3000
    });
    await loading.present();
    this.apiService.callVerificadorQuina(this.entrada_usuario)
      .then((result:any[])=>{
        this.verificar = result;
        this.modalPage()
      })
      .catch((error:any)=>{
        console.log('error:',error)
      });
    //this.modalPage() 
  }

//   showLineAposta(){
//     this.lineChartAposta = new Chart(this.chartLineAposta.nativeElement, {
 
//       type: 'line',
//       data: {
//           labels: ['JAN', 'FEV', 'MAR', 'ABR'],
//           //labels: this.datas,
//           datasets: [{
//             backgroundColor: 'rgba(156, 195, 20, 1.0)',
            
//             data: this.dez1,
//             label: this.dezena[0].dezena
//           }, {
//             backgroundColor:'rgba(176, 71, 33, 1.0)',
            
//             data:this.dez2,
//             label: this.dezena[1].dezena,
//             fill: '-1'
//           }, {
//             backgroundColor:'rgba(182, 46, 235, 1.0)',
            
//             data: this.dez3,
//             label: this.dezena[2].dezena,
//             fill: 1
//           }, {
//             backgroundColor: 'rgba(47, 198, 67, 1.0)',
            
//             data: this.dez4,
//             label: this.dezena[3].dezena,
//             fill: '-1'
//           }, {
//             backgroundColor: 'rgba(81, 46, 34, 1.0)',
            
//             data: this.dez5,
//             label: this.dezena[4].dezena,
//             fill: '-1'
//           }]
//       },
//       options: {
//         maintainAspectRatio: false,
//         spanGaps: false,
//         elements: {
//           line: {
//             tension: 0.000001
//           }
//         },
// 				scales: {
// 					xAxes: [{
	
// 						ticks: {
// 							source: 'labels'
// 						}
// 					}],
// 					yAxes: [{
// 						stacked: true,
// 					}]
//         },
//         plugins: {
//           filler: {
//             propagate: false
//           },
//           'samples-filler-analyser': {
//             target: 'chart-analyser'
//           }
//         }
// 			}

//   });
// }

}
