import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-verificador',
  templateUrl: './verificador.page.html',
  styleUrls: ['./verificador.page.scss'],
})
export class VerificadorPage implements OnInit {

  constructor(
    private router: Router,
    public loadingController: LoadingController,
  ) { }

  ngOnInit() {
  }
  async megasena(){
    const loading = await this.loadingController.create({
      message: 'Carregando Analize',
      duration: 2000
    });
    await loading.present();
    this.router.navigate(['analize-aposta', { megasena: true }]);
  }
  async lotofacil(){
    const loading = await this.loadingController.create({
      message: 'Carregando Analize',
      duration: 2000
    });
    await loading.present();
    this.router.navigate(['analize-lotofacil']);
  }
  
  // async lotomania(){
  //   const loading = await this.loadingController.create({
  //     message: 'Carregando Analize',
  //     duration: 2000
  //   });
  //   await loading.present();
  //   this.router.navigate(['/dezenas-lotomania', { verificador: true }]);
  // }
  async quina(){
    const loading = await this.loadingController.create({
      message: 'Carregando Analize',
      duration: 2000
    });
    await loading.present();
    this.router.navigate(['/analize-quina']);
  }
  voltar(){
    this.router.navigate(['home'])
  }

}
