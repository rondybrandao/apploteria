import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dezenas-lotomania',
  templateUrl: './dezenas-lotomania.page.html',
  styleUrls: ['./dezenas-lotomania.page.scss'],
})
export class DezenasLotomaniaPage implements OnInit {
  entrada_usuario = []
  entrada = []
  apostas = []
  fechamento_100x6
  fechamento_90x10x6
  fixas = []
  showFixas

  mock = [['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50'],
  ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50'],
  ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50'],
  ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50'],
  ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50'],
  ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50']]
  public form2 = [
    { id: 0, fixa: false, val: '01', checked: false },
    { id: 1, fixa: false, val: '02', checked: false },
    { id: 2, fixa: false, val: '03', checked: false },
    { id: 3, fixa: false, val: '04', checked: false },
    { id: 4, fixa: false, val: '05', checked: false },
    { id: 5, fixa: false, val: '06', checked: false },
    { id: 6, fixa: false, val: '07', checked: false }
  ]
  public form = [
    { id: 0, fixa: false, val: '01', checked: false },
    { id: 1, fixa: false, val: '02', checked: false },
    { id: 2, fixa: false, val: '03', checked: false },
    { id: 3, fixa: false, val: '04', checked: false },
    { id: 4, fixa: false, val: '05', checked: false },
    { id: 5, fixa: false, val: '06', checked: false },
    { id: 6, fixa: false, val: '07', checked: false },
    { id: 7, fixa: false, val: '08', checked: false },
    { id: 8, fixa: false, val: '09', checked: false },
    { id: 9, fixa: false, val: '10', checked: false },
    { id: 10, fixa: false, val: '11', checked: false },
    { id: 11, fixa: false, val: '12', checked: false },
    { id: 12, fixa: false, val: '13', checked: false },
    { id: 13, fixa: false, val: '14', checked: false },
    { id: 14, fixa: false, val: '15', checked: false },
    { id: 15, fixa: false, val: '16', checked: false },
    { id: 16, fixa: false, val: '17', checked: false },
    { id: 17, fixa: false, val: '18', checked: false },
    { id: 18, fixa: false, val: '19', checked: false },
    { id: 19, fixa: false, val: '20', checked: false },
    { id: 20, fixa: false, val: '21', checked: false },
    { id: 21, fixa: false, val: '22', checked: false },
    { id: 22, fixa: false, val: '23', checked: false },
    { id: 23, fixa: false, val: '24', checked: false },
    { id: 24, fixa: false, val: '25', checked: false },
    { id: 25, fixa: false, val: '26', checked: false },
    { id: 26, fixa: false, val: '27', checked: false },
    { id: 27, fixa: false, val: '28', checked: false },
    { id: 28, fixa: false, val: '29', checked: false },
    { id: 29, fixa: false, val: '30', checked: false },
    { id: 30, fixa: false, val: '31', checked: false },
    { id: 31, fixa: false, val: '32', checked: false },
    { id: 32, fixa: false, val: '33', checked: false },
    { id: 33, fixa: false, val: '34', checked: false },
    { id: 34, fixa: false, val: '35', checked: false },
    { id: 35, fixa: false, val: '36', checked: false },
    { id: 36, fixa: false, val: '37', checked: false },
    { id: 37, fixa: false, val: '38', checked: false },
    { id: 38, fixa: false, val: '39', checked: false },
    { id: 39, fixa: false, val: '40', checked: false },
    { id: 40, fixa: false, val: '41', checked: false },
    { id: 41, fixa: false, val: '42', checked: false },
    { id: 42, fixa: false, val: '43', checked: false },
    { id: 43, fixa: false, val: '44', checked: false },
    { id: 44, fixa: false, val: '45', checked: false },
    { id: 45, fixa: false, val: '46', checked: false },
    { id: 46, fixa: false, val: '47', checked: false },
    { id: 47, fixa: false, val: '48', checked: false },
    { id: 48, fixa: false, val: '49', checked: false },
    { id: 49, fixa: false, val: '50', checked: false },
    { id: 50, fixa: false, val: '51', checked: false },
    { id: 51, fixa: false, val: '52', checked: false },
    { id: 52, fixa: false, val: '53', checked: false },
    { id: 53, fixa: false, val: '54', checked: false },
    { id: 54, fixa: false, val: '55', checked: false },
    { id: 55, fixa: false, val: '56', checked: false },
    { id: 56, fixa: false, val: '57', checked: false },
    { id: 57, fixa: false, val: '58', checked: false },
    { id: 58, fixa: false, val: '59', checked: false },
    { id: 59, fixa: false, val: '60', checked: false },
    { id: 60, fixa: false, val: '61', checked: false },
    { id: 61, fixa: false, val: '62', checked: false },
    { id: 62, fixa: false, val: '63', checked: false },
    { id: 63, fixa: false, val: '64', checked: false },
    { id: 64, fixa: false, val: '65', checked: false },
    { id: 65, fixa: false, val: '66', checked: false },
    { id: 66, fixa: false, val: '67', checked: false },
    { id: 67, fixa: false, val: '68', checked: false },
    { id: 68, fixa: false, val: '69', checked: false },
    { id: 69, fixa: false, val: '70', checked: false },
    { id: 70, fixa: false, val: '71', checked: false },
    { id: 71, fixa: false, val: '72', checked: false },
    { id: 72, fixa: false, val: '73', checked: false },
    { id: 73, fixa: false, val: '74', checked: false },
    { id: 74, fixa: false, val: '75', checked: false },
    { id: 75, fixa: false, val: '76', checked: false },
    { id: 76, fixa: false, val: '77', checked: false },
    { id: 77, fixa: false, val: '78', checked: false },
    { id: 78, fixa: false, val: '79', checked: false },
    { id: 79, fixa: false, val: '80', checked: false },
    { id: 80, fixa: false, val: '81', checked: false },
    { id: 81, fixa: false, val: '82', checked: false },
    { id: 82, fixa: false, val: '83', checked: false },
    { id: 83, fixa: false, val: '84', checked: false },
    { id: 84, fixa: false, val: '85', checked: false },
    { id: 85, fixa: false, val: '86', checked: false },
    { id: 86, fixa: false, val: '87', checked: false },
    { id: 87, fixa: false, val: '88', checked: false },
    { id: 88, fixa: false, val: '89', checked: false },
    { id: 89, fixa: false, val: '90', checked: false },
    { id: 90, fixa: false, val: '91', checked: false },
    { id: 91, fixa: false, val: '92', checked: false },
    { id: 92, fixa: false, val: '93', checked: false },
    { id: 93, fixa: false, val: '94', checked: false },
    { id: 94, fixa: false, val: '95', checked: false },
    { id: 95, fixa: false, val: '96', checked: false },
    { id: 96, fixa: false, val: '97', checked: false },
    { id: 97, fixa: false, val: '98', checked: false },
    { id: 98, fixa: false, val: '99', checked: false },
    { id: 99, fixa: false, val: '00', checked: false }

  ];
  constructor(
    public apiService: ApiService,
    public toastController:ToastController,
    private route: ActivatedRoute,
  ) { 
    this.fechamento_100x6 = this.route.snapshot.paramMap.get('fechamento_100x6');
    this.fechamento_90x10x6 = this.route.snapshot.paramMap.get('fechamento_90x10x6')
  }

  ngOnInit() {
  }

  // onFilterChange(eve: any){
  //   console.log("id:",this.form[eve.id])
  //     this.form[eve.id].checked = !this.form[eve.id].checked
  //     console.log('evento:',eve)
  //     if (eve.checked){
  //       this.entrada_usuario.push(eve.val)
  //     } else {
  //       let index = this.entrada_usuario.indexOf(eve.val);
  //       console.log("index:",index);
  //       this.entrada_usuario.splice(index, 1)
        
  //     }
  //     console.log('entrada_usuario:', this.entrada_usuario)
  // }
  onFilterChange(eve: any){
    this.form[eve.id].checked = !this.form[eve.id].checked;
    if (this.form[eve.id].fixa && this.fixas.length >= 10){
      this.form[eve.id].fixa = false;
      console.log('this.form[eve.id].fixa:', this.form[eve.id].fixa);
      let index = this.fixas.indexOf(eve.val);
      let index2 = this.entrada_usuario.indexOf(eve.val);
      this.fixas.splice(index, 1);
      this.entrada_usuario.splice(index2, 1);
      console.log('this.fixas depois do splice', this.fixas)

    } else if (this.form[eve.id].fixa && this.fixas.length < 10){
      this.form[eve.id].fixa = !this.form[eve.id].fixa;
      let index = this.fixas.indexOf(eve.val);
      let index2 = this.entrada_usuario.indexOf(eve.val);
      this.fixas.splice(index, 1);
      this.entrada_usuario.splice(index2, 1)
      
    } else if (this.form[eve.id].fixa == false && this.fixas.length < 10){
      this.form[eve.id].fixa = !this.form[eve.id].fixa;
      this.fixas.push(eve.val);
      this.entrada_usuario.push(eve.val)

    } else if (this.form[eve.id].fixa == false && this.fixas.length >= 10 && this.form[eve.id].checked){
      this.entrada.push(eve.val);
      this.entrada_usuario.push(eve.val)

    } else if (this.form[eve.id].fixa == false && this.fixas.length >= 10 && this.form[eve.id].checked==false){
      let index = this.entrada.indexOf(eve.val);
      let index2 = this.entrada_usuario.indexOf(eve.val);
      this.entrada.splice(index, 1);
      this.entrada_usuario.splice(index2, 1)
    }
    
    
    console.log('fixas:', this.fixas);
    console.log('entrada:', this.entrada)
    console.log('entrada_usuario:', this.entrada_usuario.length)
  }
  async presentToast(){
    const toast = await this.toastController.create({
      message: 'ERRO!: ESCOLHA 100 DEZENAS!.',
      duration: 2000,
      position: "middle"
    });
    toast.present();
  }

  async presentToast_90_10_6(){
    const toast = await this.toastController.create({
      message: 'ERRO!: ESCOLHA 90 DEZENAS!. AS PRIMEIRAS 10 DEZENAS SÃO FIXAS REPETINDO-SE EM TODOS OS JOGOS',
      duration: 2000,
      position: "middle"
    });
    toast.present();
  }

  callServiceLotomania_100x6(){
    
    if (this.entrada_usuario.length == 100){
      this.apiService.callServiceLotomania_100x6(this.entrada_usuario)
        .then((result:any) => {
          this.apostas = result
        })
        .catch((error:any) => {
          console.log('error', error)
        });
    } else {
      this.presentToast()
    }
  }

  callServiceLotomania_90x10x6(){
    if (this.entrada_usuario.length == 90){
      this.apiService.callServiceLotomania_90x10x6(this.entrada_usuario)
        .then((result:any) => {
          this.apostas = result
        })
        .catch((error:any) => {
          console.log('error', error)
        });
    } else {
      this.presentToast_90_10_6()
    }
  }

}