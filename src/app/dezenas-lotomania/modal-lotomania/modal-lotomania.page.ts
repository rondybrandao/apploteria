import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-lotomania',
  templateUrl: './modal-lotomania.page.html',
  styleUrls: ['./modal-lotomania.page.scss'],
})
export class ModalLotomaniaPage {

  constructor(private modalController: ModalController) {  }

  voltar() {
    this.modalController.dismiss()
  }

}
