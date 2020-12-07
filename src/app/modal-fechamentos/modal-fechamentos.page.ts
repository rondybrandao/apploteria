import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-modal-fechamentos',
  templateUrl: './modal-fechamentos.page.html',
  styleUrls: ['./modal-fechamentos.page.scss'],
})
export class ModalFechamentosPage implements OnInit {
  apostas
  
  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    public loadingController: LoadingController,
    public apiService: ApiService,
  ) {
      this.apostas = this.navParams.get('apostas'); 
      
  }

  ngOnInit() {
    console.log(this.apostas)
  }

  close() {
    this.modalController.dismiss()
  }
}
