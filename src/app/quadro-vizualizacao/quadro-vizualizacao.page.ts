import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';

import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-quadro-vizualizacao',
  templateUrl: './quadro-vizualizacao.page.html',
  styleUrls: ['./quadro-vizualizacao.page.scss'],
})
export class QuadroVizualizacaoPage implements OnInit {
  images = []
  grid = true
  isActive:boolean
  sliderOpts = {
    zoom: false,
    slidesPerView: 3,
    centeredSlides: false
  }
  constructor(
    private modalController: ModalController,
    public navCtrl: NavController,
    private nativeAudio: NativeAudio
    ) { }

  ngOnInit() {
    this.nativeAudio.preloadComplex('frequencia432', 'assets/audio/frequencia-432.mp3', 1, 1, 0)
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

  ativarFrequencia(e){
    console.log(e)
    this.isActive = e.detail.cheched
    if (e.detail.checked ) { this.nativeAudio.play('frequencia432')} 
    else { this.nativeAudio.stop('frequencia432')}
  }

}
