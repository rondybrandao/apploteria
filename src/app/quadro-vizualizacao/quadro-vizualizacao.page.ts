import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';

@Component({
  selector: 'app-quadro-vizualizacao',
  templateUrl: './quadro-vizualizacao.page.html',
  styleUrls: ['./quadro-vizualizacao.page.scss'],
})
export class QuadroVizualizacaoPage implements OnInit {
  images = []
  grid = true
  sliderOpts = {
    zoom: false,
    slidesPerView: 3,
    centeredSlides: false
  }
  constructor(
    private modalController: ModalController,
    public navCtrl: NavController
    ) { }

  ngOnInit() {
  }
  openPreview(img){
    this.modalController.create({
      component: ImageModalPage,
      componentProps: {
        img: img
      }
    }).then(modal => {
      modal.present();
    });
  }
  close() {
    this.modalController.dismiss();
  }
  voltar() {
    this.navCtrl.navigateBack('quadro-vizualizacao');
  }
}
