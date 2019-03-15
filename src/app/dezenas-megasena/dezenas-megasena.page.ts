import { HttpModule } from '@angular/http';
import { ApiService } from './../api.service';
import { MegasenaService } from './../service/service';
import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dezenas-megasena',
  templateUrl: './dezenas-megasena.page.html',
  styleUrls: ['./dezenas-megasena.page.scss'],
})


export class DezenasMegasenaPage implements OnInit {
  
  dezenas = []
  apostas = []
  entrada_usuario = []
  fechamneto18x3x9
  fechamento12x6

  mock = [['01','02','03','04','05','06'],
          ['01','02','03','04','05','06'],
          ['01','02','03','04','05','06'],
          ['01','02','03','04','05','06'],
          ['01','02','03','04','05','06'],
          ['01','02','03','04','05','06']]
  

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
    public service: MegasenaService,
    public apiService: ApiService,
    public toastController:ToastController,
    private router: Router,
    private route: ActivatedRoute) {
      this.fechamneto18x3x9 = this.route.snapshot.paramMap.get('fechamneto18x3x9');
      this.fechamento12x6 = this.route.snapshot.paramMap.get('fechamento12x6');
  
    }

  ngOnInit() {}
  notify(){
    //let checks = document.querySelectorAll("input[type='checkbox']");
    
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

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'ERRO!: ESCOLHA 12 DEZENAS!.',
      duration: 3000,
      position: "middle"
    });
    toast.present();
  }
  
  callService(){
    if (this.entrada_usuario.length == 12){
      this.apiService.callFechamento(this.entrada_usuario)
      .then((result:any)=>{
        this.apostas = result;
        for (var r of result){
          Object.entries(r['concurso']).forEach(([key, value])=>{
            console.log(key + ' ' + value);
          })
    
        }
        console.log('result callService:',result[0].concurso);
        console.log('apostas::',this.apostas);
      })
      .catch((error:any)=>{
        console.log('error:',error)
      });
    }
    else {
      this.presentToast()
    }
    
  }

  callServiceFechamento18x3x9(){
    if (this.entrada_usuario.length == 18){
      this.apiService.callFechamento18x3x9(this.entrada_usuario)
      .then((result:any)=>{
        this.apostas = result;
        console.log('result callService:',result)
      })
      .catch((error:any)=>{
        console.log('error:',error)
      });
    }
    else {
      this.presentToast()
    }
  }

}
