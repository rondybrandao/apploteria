import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MegasenaService } from './service/service';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';

import { ImageModalPageModule } from './image-modal/image-modal.module';
import { ModalAnalizeQuinaPageModule } from './modal-analize-quina/modal-analize-quina.module';
import { ModalFechamentosPageModule } from './modal-fechamentos/modal-fechamentos.module';
import { ModalAnalizeLotofacilPageModule } from './modal-analize-lotofacil/modal-analize-lotofacil.module';
import { ModalFechamentoQuinaPageModule } from './modal-fechamento-quina/modal-fechamento-quina.module';
import { ModalFechamentosLotofacilPageModule } from './modal-fechamentos-lotofacil/modal-fechamentos-lotofacil.module';
//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ImageModalPageModule,
    ModalAnalizeQuinaPageModule,
    ModalFechamentosPageModule,
    ModalAnalizeLotofacilPageModule,
    ModalFechamentoQuinaPageModule,
    ModalFechamentosLotofacilPageModule,
    AngularFireDatabaseModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    MegasenaService

  ],
  bootstrap: [AppComponent]
  
})
export class AppModule {}
