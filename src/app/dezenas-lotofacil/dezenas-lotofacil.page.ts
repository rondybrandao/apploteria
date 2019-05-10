import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, LoadingController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../servicos/firebase.service';
import { ModalFechamentosPage } from '../modal-fechamentos/modal-fechamentos.page';
import { ModalFechamentosLotofacilPage } from '../modal-fechamentos-lotofacil/modal-fechamentos-lotofacil.page';

@Component({
  selector: 'app-dezenas-lotofacil',
  templateUrl: './dezenas-lotofacil.page.html',
  styleUrls: ['./dezenas-lotofacil.page.scss'],
})
export class DezenasLotofacilPage implements OnInit {

  entrada_usuario =[]
  apostas = []
  fechamento_22x8x6
  fechamento_18x6
  fechamento_20x4
  fechamento_21x5
  verificador
  sorteio_corrente
  dezenas_corrente



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
    { id: 24, val: '25', checked: false }]

  constructor(
    public apiService: ApiService,
    public toastController:ToastController,
    private route: ActivatedRoute,
    public navCtrl: NavController,
    public firebaseService: FirebaseService,
    private loadingController: LoadingController,
    private modalController: ModalController
  ) { 
    this.fechamento_22x8x6 = this.route.snapshot.paramMap.get('fechamento22x8x6');
    this.fechamento_18x6 = this.route.snapshot.paramMap.get('fechamento18x6');
    this.fechamento_20x4 = this.route.snapshot.paramMap.get('fechamento20x4');
    this.fechamento_21x5 = this.route.snapshot.paramMap.get('fechamento21x5');
    this.verificador = this.route.snapshot.paramMap.get('verificador')
    
    this.callServiceSorteioCorrente()
    this.callServiceDezenasCorrente()
  }

  ngOnInit() {
  }
  voltar() {
    this.navCtrl.navigateBack('lotofacil');
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

  async presentToast(){
    const toast = await this.toastController.create({
      message: 'ERRO!: ESCOLHA 22 DEZENAS!.',
      duration: 2000,
      position: "middle"
    });
    toast.present();
  }
  async presentToast_20_4(){
    const toast = await this.toastController.create({
      message: 'ERRO!: ESCOLHA 20 DEZENAS!.',
      duration: 2000,
      position: "middle"
    });
    toast.present();
  }
  async presentToast_21_5(){
    const toast = await this.toastController.create({
      message: 'ERRO!: ESCOLHA 21 DEZENAS!.',
      duration: 2000,
      position: "middle"
    });
    toast.present();
  }
  async presentToast_22_8_6(){
    const toast = await this.toastController.create({
      message: 'ERRO!: ESCOLHA 22 DEZENAS!.',
      duration: 2000,
      position: "middle"
    });
    toast.present();
  }
  async presentToast_18_6(){
    const toast = await this.toastController.create({
      message: 'ERRO!: ESCOLHA 18 DEZENAS!.',
      duration: 2000,
      position: "middle"
    });
    toast.present();
  }
  async presentToastVerificador(){
    const toast = await this.toastController.create({
      message: 'ERRO!: ESCOLHA 15 DEZENAS!.',
      duration: 2000,
      position: "middle"
    });
    toast.present();
  }
  callServiceSorteioCorrente() {
    this.firebaseService.getSorteioCorrenteLoteria('lotofacil')
      .then((result:any)=>{
        this.sorteio_corrente = result
      })
      .catch((error:any)=>{
        console.log('error:', error)
      })  
  }
  callServiceDezenasCorrente() {
    this.firebaseService.getDezenasCorrenteLoteria('lotofacil')
      .then((result:any) =>{
        this.dezenas_corrente = result
      })
      .catch((error:any)=>{
        console.log('error:', error)
      })
  }
  verificarDezenas(){
    if (this.entrada_usuario.length == 15){
      this.apiService.callVerificadorLotofacil(this.entrada_usuario)
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
  callServiceLotofacil_22x8x6(){
    if (this.entrada_usuario.length == 22){
      this.loadingFechamento_22x8x6()
    } else {
      this.presentToast_22_8_6()
    }
  }
  async loadingFechamento_22x8x6() {
    const loading = await this.loadingController.create({
      message: 'Analizando Fechamentos',
      duration: 3000
    });
    await loading.present();
    this.apiService.callServiceLotofacil_22x8x6(this.entrada_usuario)
      .then((result:any[])=> {
        this.apostas = result
      })
      .catch((error:any)=>{
        console.log('error', error)
      })
  }
  
  modalPage() {
    this.modalController.create({
      component: ModalFechamentosLotofacilPage,
      componentProps: {
        entrada: this.entrada_usuario,
        fechamento: "18x6"
      }
    }).then(modal => {
      modal.present();
    })
    .catch((error:any)=>{
      console.log('error:', error)
    })
  }
  callServiceLotofacil_18x6(){
    if (this.entrada_usuario.length == 18){
      this.loadingFechamento_18x6()
    } else {
      this.presentToast_18_6()
    }
  }
  async loadingFechamento_18x6() {
    const loading = await this.loadingController.create({
      message: 'Analizando Fechamentos',
      duration: 3000
    });
    await loading.present();
    this.apiService.callServiceLotofacil_18x6(this.entrada_usuario)
      .subscribe((result:any[])=> {
        this.apostas = result
        this.modalPage()
      })
  }
  callServiceLotofacil_20x4(){
    if (this.entrada_usuario.length == 20){
      this.loadingFechamento_20x4()
    } else {
      this.presentToast_20_4()
    }
  }
  async loadingFechamento_20x4() {
    const loading = await this.loadingController.create({
      message: 'Analizando Fechamentos',
      duration: 3000
    });
    await loading.present();
    this.apiService.callServiceLotofacil_20x4(this.entrada_usuario)
      .then((result:any[])=> {
        this.apostas = result
        this.modalPage()
      })
      .catch((error:any)=>{
        console.log('error', error)
      })
  }
  callServiceLotofacil_21x5(){
    if (this.entrada_usuario.length == 21){
      this.loadingFechamento_21x5()
    } else {
      this.presentToast_21_5()
    }
  }
  async loadingFechamento_21x5() {
    const loading = await this.loadingController.create({
      message: 'Analizando Fechamentos',
      duration: 3000
    });
    await loading.present();
    this.apiService.callServiceLotofacil_21x5(this.entrada_usuario)
      .then((result:any[])=> {
        this.apostas = result
        this.modalPage()
      })
      .catch((error:any)=>{
        console.log('error', error)
      })
  }
}
