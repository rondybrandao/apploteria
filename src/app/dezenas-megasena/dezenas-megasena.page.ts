import { FechamentosService } from './../servicos/fechamentos.service';
import { ModalFechamentosPage } from './../modal-fechamentos/modal-fechamentos.page';
import { ApiService } from './../api.service';
import { FirebaseService } from './../servicos/firebase.service'
import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, LoadingController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


export interface Concurso{
  concurso:string,
  pontos:string   
}

@Component({
  selector: 'app-dezenas-megasena',
  templateUrl: './dezenas-megasena.page.html',
  styleUrls: ['./dezenas-megasena.page.scss']
})


export class DezenasMegasenaPage implements OnInit {
  
  dezenas = []
  apostas = []
  entrada_usuario = []
  verificador
  concurso_pontos = []
  chamada
  fechamento

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
    public firebaseService: FirebaseService,
    public apiService: ApiService,
    public fechamentoService: FechamentosService,
    public toastController:ToastController,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public navCtrl: NavController,
    private modalController: ModalController) 
    {
      this.fechamento = this.route.snapshot.paramMap.get('fechamento')
      
    }

  ngOnInit() {
    console.log(this.fechamento)
  }
  voltar() {
    this.navCtrl.navigateBack('mega-sena');
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

  async showToast() {
    if (this.fechamento=='12x6'){
      const toast = await this.toastController.create({
        message: 'ERRO!: ESCOLHA 12 DEZENAS!.',
        duration: 2000,
        position: "middle"
      });
      toast.present();
    } else if (this.fechamento=='12x7') {
      const toast = await this.toastController.create({
        message: 'ERRO!: ESCOLHA 12 DEZENAS!.',
        duration: 2000,
        position: "middle"
      });
      toast.present();
    } else if (this.fechamento=='9x12') {
      const toast = await this.toastController.create({
        message: 'ERRO!: ESCOLHA 9 DEZENAS!.',
        duration: 2000,
        position: "middle"
      });
      toast.present();
    } else if (this.fechamento=='8x7') {
      const toast = await this.toastController.create({
        message: 'ERRO!: ESCOLHA 8 DEZENAS!.',
        duration: 2000,
        position: "middle"
      });
      toast.present();
    } else if (this.fechamento=='18x9') {
      const toast = await this.toastController.create({
        message: 'ERRO!: ESCOLHA 18 DEZENAS!.',
        duration: 2000,
        position: "middle"
      });
      toast.present();
    } else if (this.fechamento=='10x3') {
      const toast = await this.toastController.create({
        message: 'ERRO!: ESCOLHA 10 DEZENAS!.',
        duration: 2000,
        position: "middle"
      });
      toast.present();
    } else if (this.fechamento=='12x17x3f') {
      const toast = await this.toastController.create({
        message: 'ERRO!: ESCOLHA 12 DEZENAS!.',
        duration: 2000,
        position: "middle"
      });
      toast.present();
    } 
  
  }

  async presentToastVerificador() {
    const toast = await this.toastController.create({
      message: 'ERRO!: ESCOLHA 6 DEZENAS!.',
      duration: 2000,
      position: "middle"
    });
    toast.present();
  }
  
  modalPage() {
    this.modalController.create({
      component: ModalFechamentosPage,
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
  
  callFechamento(){
    if (this.entrada_usuario.length == 12 && this.fechamento == '12x6'){
      this.loadingFechamento12x6()

    } else if (this.entrada_usuario.length == 9 && this.fechamento == '9x12') {
      this.loadingFechamento9x12()

    } else if (this.entrada_usuario.length == 12 && this.fechamento == '12x7') {
      this.loadingFechamento12x7()
      
    } else if (this.entrada_usuario.length == 8 && this.fechamento == '8x7'){
      this.loadingFechamento_8x7()
      
    } else if (this.entrada_usuario.length == 18 && this.fechamento == '18x9') {
      this.loadingFechamento_18_3_9()

    } else if (this.entrada_usuario.length == 12 && this.fechamento == '12x17x3f') {
      this.loadingFechamento12x3x17()

    } else if (this.entrada_usuario.length == 10 && this.fechamento == '10x3') {
      this.loadingFechamento_10x3()
    }
    else {
      this.showToast()
    }
  }
  async loadingFechamento12x6() {
    const loading = await this.loadingController.create({
      message: 'Criando fechamentos',
      duration: 2000
    });
    await loading.present();
    this.fechamentoService.callFechamento_12x6(this.entrada_usuario)
      .then((result:any[])=>{
        console.log(result)
        this.apostas = result;
        this.modalPage();
      })
      .catch((error:any)=>{
        console.log('error:',error)
    });
  }

  async loadingFechamento12x7() {
    const loading = await this.loadingController.create({
      message: 'Criando fechamentos',
      duration: 3000
    });
    await loading.present();
    this.fechamentoService.callFechamento_12x7(this.entrada_usuario)
      .then((result:any[])=>{
        console.log(result)
        this.apostas = result;
        this.modalPage();
      })
      .catch((error:any)=>{
        console.log('error:',error)
    });
  }

 
  async loadingFechamento_18_3_9() {
    const loading = await this.loadingController.create({
      message: 'Analizando fechamentos',
      duration: 3000
    });
    await loading.present();
    this.fechamentoService.callFechamento_18x9(this.entrada_usuario)
      .then((result:any[])=>{
        this.apostas = result;
        this.modalPage()
      })
      .catch((error:any)=>{
        console.log('error:',error)
    });
  }


  async loadingFechamento12x3x17() {
    const loading = await this.loadingController.create({
      message: 'Criando fechamentos',
      duration: 3000
    });
    await loading.present();
    this.fechamentoService.callFechamento_12x17x3f(this.entrada_usuario)
      .then((result:any[])=>{
        this.apostas = result;
        this.modalPage()
      })
      .catch((error:any)=>{
        console.log('error:',error)
      });
  }

  
  async loadingFechamento9x12() {
    const loading = await this.loadingController.create({
      message: 'Analizando fechamentos',
      duration: 3000
    });
    await loading.present();
    this.apiService.callFechamento9x12(this.entrada_usuario)
      .then((result:any[])=>{
        this.apostas = result;
        this.modalPage()
      })
      .catch((error:any)=>{
        console.log('error:',error)
    });
    
  }

  
  async loadingFechamento_8x7() {
    const loading = await this.loadingController.create({
      message: 'Analizando fechamentos',
      duration: 3000
    });
    await loading.present();
    this.fechamentoService.callFechamento_8x7(this.entrada_usuario)
      .then((result:any[])=>{
        this.apostas = result;
        this.modalPage()
      })
      .catch((error:any)=>{
        console.log('error:',error)
    });
  }
  
  async loadingFechamento_10x3() {
    const loading = await this.loadingController.create({
      message: 'Criando fechamentos',
      duration: 3000
    });
    await loading.present()
    this.fechamentoService.callFechamento_10x3(this.entrada_usuario)
      .then((result:any[])=>{
        this.apostas = result;
        this.modalPage();
      })
      .catch((error:any)=>{
        console.log('error:',error)
    });
    
  }

}
