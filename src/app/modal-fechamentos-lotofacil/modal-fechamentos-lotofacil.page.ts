import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-modal-fechamentos-lotofacil',
  templateUrl: './modal-fechamentos-lotofacil.page.html',
  styleUrls: ['./modal-fechamentos-lotofacil.page.scss'],
})
export class ModalFechamentosLotofacilPage {
  @Input() entrada: any;
  @Input() apostas;
  fechamento
  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    
  ) { 
    this.entrada =  this.navParams.get('entrada');
    this.fechamento = this.navParams.get('fechamento')
  }

  close() {
    this.modalController.dismiss()
  }
}
