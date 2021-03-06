import { FechamentosService } from './../servicos/fechamentos.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastController, NavController, ModalController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../servicos/firebase.service';
import { ModalFechamentoQuinaPage } from '../modal-fechamento-quina/modal-fechamento-quina.page';

@Component({
  selector: 'app-dezenas-quina',
  templateUrl: './dezenas-quina.page.html',
  styleUrls: ['./dezenas-quina.page.scss'],
})
export class DezenasQuinaPage implements OnInit {
  entrada_usuario =[]
  apostas = []
  fechamento
  verificador

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
    private route: ActivatedRoute,
    public navCtrl: NavController,
    public firebaseService: FirebaseService,
    private modalController: ModalController,
    public loadingController: LoadingController,
    public fechamentoService: FechamentosService
  ) {
    this.fechamento = this.route.snapshot.paramMap.get('fechamento')
    console.log(this.fechamento)
  }

  ngOnInit() {
  }
  voltar() {
    this.navCtrl.navigateBack('quina');
  }
  onFilterChange(eve: any){
    console.log("id:",this.form[eve.id])
      this.form[eve.id].checked = !this.form[eve.id].checked
      console.log('evento:',eve)
      if (eve.checked){
        this.entrada_usuario.push(eve.val)
      } else {
        let index = this.entrada_usuario.indexOf(eve.val);
        console.log("index:",index);
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

  
  verificarDezenas(){
    if (this.entrada_usuario.length == 5){
      this.apiService.callVerificadorQuina(this.entrada_usuario)
      .then((result:any[])=>{
        this.apostas = result;
      })
      .catch((error:any)=>{
        console.log('error:',error)
      });
    }
    else {
      this.presentToastVerificador()
    }
  }

  modalPage() {
    this.modalController.create({
      component: ModalFechamentoQuinaPage,
      componentProps: {
        apostas: this.apostas,
        fechamento: this.apostas
      }
    }).then(modal => {
      modal.present();
    })
    .catch((error:any)=>{
      console.log('error:', error)
    })
  }

  async showToast() {
    if (this.fechamento=='8x8'){
      const toast = await this.toastController.create({
        message: 'ERRO!: ESCOLHA 8 DEZENAS!.',
        duration: 2000,
        position: "middle"
      });
      toast.present();
    } else if (this.fechamento=='15x16') {
      const toast = await this.toastController.create({
        message: 'ERRO!: ESCOLHA 15 DEZENAS!.',
        duration: 2000,
        position: "middle"
      });
      toast.present();
    } else if (this.fechamento=='9x15') {
      const toast = await this.toastController.create({
        message: 'ERRO!: ESCOLHA 9 DEZENAS!.',
        duration: 2000,
        position: "middle"
      });
      toast.present();
    } else if (this.fechamento=='7x21') {
      const toast = await this.toastController.create({
        message: 'ERRO!: ESCOLHA 7 DEZENAS!.',
        duration: 2000,
        position: "middle"
      });
      toast.present();
    }
  }

  callFechamento(){
    if (this.entrada_usuario.length == 8 && this.fechamento == '8x8'){
      this.loadingFechamento_8x8()

    } else if (this.entrada_usuario.length == 15 && this.fechamento == '15x16') {
      this.loadingFechamento_15x16()

    } else if (this.entrada_usuario.length == 9 && this.fechamento == '9x15') {
      this.loadingFechamento_9x15()
      
    } else if (this.entrada_usuario.length == 7 && this.fechamento == '7x21'){
      this.loadingFechamento_7x21()
      
    } else if (this.entrada_usuario.length == 10 && this.fechamento == '10x2') {
      this.loadingFechamento_10x2() 
    
    } else {
      this.showToast()
    }
  }

  async loadingFechamento_10x2() {
    const loading = await this.loadingController.create({
      message: 'Criando fechamentos',
      duration: 2000
    });
    await loading.present();
    this.fechamentoService.callFechamentoQuina_10x2(this.entrada_usuario)
      .then((result:any[])=>{
        console.log(result)
        this.apostas = result;
        this.modalPage();
      })
      .catch((error:any)=>{
        console.log('error:',error)
    });
  }

  async loadingFechamento_8x8() {
    const loading = await this.loadingController.create({
      message: 'Criando fechamentos',
      duration: 2000
    });
    await loading.present();
    this.fechamentoService.callFechamentoQuina_8x8(this.entrada_usuario)
      .then((result:any[])=>{
        console.log(result)
        this.apostas = result;
        this.modalPage();
      })
      .catch((error:any)=>{
        console.log('error:',error)
    });
  }

  async loadingFechamento_15x16() {
    const loading = await this.loadingController.create({
      message: 'Criando fechamentos',
      duration: 2000
    });
    await loading.present();
    this.fechamentoService.callFechamentoQuina_15x16(this.entrada_usuario)
      .then((result:any[])=>{
        console.log(result)
        this.apostas = result;
        this.modalPage();
      })
      .catch((error:any)=>{
        console.log('error:',error)
    });
  }

  async loadingFechamento_9x15() {
    const loading = await this.loadingController.create({
      message: 'Criando fechamentos',
      duration: 2000
    });
    await loading.present();
    this.fechamentoService.callFechamentoQuina_9x15(this.entrada_usuario)
      .then((result:any[])=>{
        console.log(result)
        this.apostas = result;
        this.modalPage();
      })
      .catch((error:any)=>{
        console.log('error:',error)
    });
  }

  async loadingFechamento_7x21() {
    const loading = await this.loadingController.create({
      message: 'Criando fechamentos',
      duration: 2000
    });
    await loading.present();
    this.fechamentoService.callFechamentoQuina_7x21(this.entrada_usuario)
      .then((result:any[])=>{
        console.log(result)
        this.apostas = result;
        this.modalPage();
      })
      .catch((error:any)=>{
        console.log('error:',error)
    });
  }
  
  // callServiceQuina_18x12x5x6(){
  //   if (this.entrada_usuario.length == 18){
  //     this.apiService.callServiceQuina_18x12x5x6(this.entrada_usuario)
  //       .then((result:any) => {
  //         this.apostas = result
  //       })
  //       .catch((error:any) => {
  //         console.log('error', error)
  //       });
  //   } else {
  //     this.presentToast()
  //   }
  // }

  // callServiceQuina_10x19(){
  //   if (this.entrada_usuario.length == 10){
  //     this.apiService.callServiceQuina_10x19(this.entrada_usuario)
  //       .then((result:any) => {
  //         this.apostas = result
  //       })
  //       .catch((error:any) => {
  //         console.log('error', error)
  //       });
  //   } else {
  //     this.presentToast()
  //   }
  // }
  // // callServiceQuina_8x8(){
  // //   if (this.entrada_usuario.length == 8){
  // //     this.apiService.callServiceQuina_8x8(this.entrada_usuario)
  // //       .then((result:any) => {
  // //         this.apostas = result
  // //       })
  // //       .catch((error:any) => {
  // //         console.log('error', error)
  // //       });
  // //   } else {
  // //     this.presentToast()
  // //   }
  // // }


  // callServiceQuina_8x8(){
  //   if (this.entrada_usuario.length == 8){
  //     this.apiService.callServiceQuina_8x8(this.entrada_usuario)
  //       .subscribe((result:any) => {
  //         this.apostas = result;
  //         this.modalFechamento()
  //       })
  //   } else {
  //     this.presentToast()
  //   }
  // }

  // callServiceQuina_10x2(){
  //   if (this.entrada_usuario.length == 10){
  //     this.loadingFechamento()
  //   } else {
  //     this.presentToast()
  //   }
  // }
  // async loadingFechamento() {
  //   const loading = await this.loadingController.create({
  //     message: 'Analizando fechamentos',
  //     duration: 3000
  //   });
  //   await loading.present();
  //   const fechamento = this.apiService.callServiceQuina_10x2(this.entrada_usuario)
  //     .then((result:any[])=>{
  //       this.apostas = result
  //       this.modalFechamento();
  //     })
  // }
  // async modalFechamento() {
  //   const modal = await this.modalController.create({
  //     component: ModalFechamentoQuinaPage,
  //     componentProps: {
  //       apostas: this.apostas
  //     }
  //   })
  //   await modal.present()
  // }
}
