import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-analize-lotofacil',
  templateUrl: './analize-lotofacil.page.html',
  styleUrls: ['./analize-lotofacil.page.scss'],
})
export class AnalizeLotofacilPage implements OnInit {

  entrada_usuario =[]
  apostas = []
  concurso_pontos = []
  dezenas = []
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
    public navCtrl: NavController
    
  ) { }

  ngOnInit() {
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
  async presentToastVerificador(){
    const toast = await this.toastController.create({
      message: 'ERRO!: ESCOLHA 15 DEZENAS!.',
      duration: 2000,
      position: "middle"
    });
    toast.present();
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
  voltar() {
    this.navCtrl.navigateBack('verificador')
  }


}
