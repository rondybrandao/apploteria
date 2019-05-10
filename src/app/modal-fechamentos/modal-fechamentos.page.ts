import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-fechamentos',
  templateUrl: './modal-fechamentos.page.html',
  styleUrls: ['./modal-fechamentos.page.scss'],
})
export class ModalFechamentosPage implements OnInit {
  apostas;
  apostas_fechadas: any;
  entrada_usuario;
  fechamento
  fechamento12x6=true

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    public loadingController: LoadingController,
    public apiService: ApiService,
    private route: ActivatedRoute,
  ) {
      this.entrada_usuario = this.navParams.get('entrada');
      this.apostas = this.navParams.get('apostas');
      this.fechamento = this.navParams.get('fechamento');
      console.log(this.apostas)
      console.log(this.entrada_usuario)
  }

  ngOnInit() {}

  close() {
    this.modalController.dismiss()
  }
  async loadingFechamento_18_3_9() {
    const loading = await this.loadingController.create({
      message: 'Analizando fechamentos',
      duration: 3000
    });
    await loading.present();
    this.apiService.callFechamento18x3x9(this.entrada_usuario)
      .then((result:any[])=>{
        this.apostas_fechadas = result;
        console.log('callServiceFechamento18x3x9:',result)
      })
      .catch((error:any)=>{
        console.log('error:',error)
    });
    
  }

}
