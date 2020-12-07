import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-modal-fechamento-quina',
  templateUrl: './modal-fechamento-quina.page.html',
  styleUrls: ['./modal-fechamento-quina.page.scss'],
})
export class ModalFechamentoQuinaPage implements OnInit {
  apostas
  entrada_usuario
  constructor(
    private navParams: NavParams,
    public apiService: ApiService,
    private modalController: ModalController,
  ) { 
    this.apostas = this.navParams.get('apostas');
  }

  ngOnInit() { }
  close() {
    this.modalController.dismiss()
  }

}
