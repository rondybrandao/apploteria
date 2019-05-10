import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-analize-lotofacil',
  templateUrl: './modal-analize-lotofacil.page.html',
  styleUrls: ['./modal-analize-lotofacil.page.scss'],
})
export class ModalAnalizeLotofacilPage implements OnInit {
  fechamentos: any;
  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.fechamentos = this.navParams.get('fechamentos');
    console.log(this.fechamentos)
  }
  close() {
    this.modalController.dismiss()
  }

}
