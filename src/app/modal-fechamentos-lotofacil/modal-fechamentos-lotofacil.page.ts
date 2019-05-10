import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-modal-fechamentos-lotofacil',
  templateUrl: './modal-fechamentos-lotofacil.page.html',
  styleUrls: ['./modal-fechamentos-lotofacil.page.scss'],
})
export class ModalFechamentosLotofacilPage implements OnInit {
  @Input() entrada: any;
  @Input() apostas;
  fechamento
  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    public apiService: ApiService,
    private loadingController: LoadingController,
  ) { 
    this.entrada =  this.navParams.get('entrada');
    this.fechamento = this.navParams.get('fechamento')
  }

  ngOnInit() {
    if(this.fechamento == "18x6"){
      this.loadingController.create({
        message: 'Analizando Fechamentos',
        duration: 3000
      }).then((modal)=>{
        modal.present();
        if(this.fechamento=="18x6"){
          this.loadingFechamento()
        }
      })
      
    }
  }
  close() {
    this.modalController.dismiss()
  }

  async loadingFechamento() {
    this.apiService.callServiceLotofacil_18x6(this.entrada)
      .subscribe((result:any[])=> {
        this.apostas = result
      })
  }
}
