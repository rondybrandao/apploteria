import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NavParams, NavController, ModalController } from '@ionic/angular';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-modal-analize-quina',
  templateUrl: './modal-analize-quina.page.html',
  styleUrls: ['./modal-analize-quina.page.scss'],
})
export class ModalAnalizeQuinaPage implements OnInit {

  dezena
  @ViewChild('chartLineAposta') chartLineAposta;
  lineChartAposta: any;
  fechamento

  constructor(
    private navParams: NavParams,
    public navCtrl: NavController,
    private modalController: ModalController
  ) { 

    this.dezena = this.navParams.get('dezena')
    this.fechamento = this.navParams.get('value')
    console.log(this.fechamento)
    console.log(this.dezena)
  }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    this.showLineAposta()
  }
  voltar(){
    this.navCtrl.navigateBack('analize-quina');
  }
  close() {
    this.modalController.dismiss();
  }
  showLineAposta(){
    this.lineChartAposta = new Chart(this.chartLineAposta.nativeElement, {
 
      type: 'line',
      data: {
          labels: ['JAN', 'FEV', 'MAR', 'ABR'],
          //labels: this.datas,
          datasets: [{
            backgroundColor: 'rgba(156, 195, 20, 1.0)',
            
            data: [this.dezena[0].total[0], this.dezena[0].total[1], this.dezena[0].total[2], this.dezena[0].total[3]],
            label: this.dezena[0].dezena
          }, {
            backgroundColor:'rgba(176, 71, 33, 1.0)',
            
            data: [this.dezena[1].total[0], this.dezena[1].total[1], this.dezena[1].total[2], this.dezena[1].total[3]],
            label: this.dezena[1].dezena,
            fill: '-1'
          }, {
            backgroundColor:'rgba(182, 46, 235, 1.0)',
            
            data: [this.dezena[2].total[0], this.dezena[2].total[1], this.dezena[2].total[2], this.dezena[2].total[3]],
            label: this.dezena[2].dezena,
            fill: 1
          }, {
            backgroundColor: 'rgba(100, 100, 100, 1.0)',
            
            data: [this.dezena[3].total[0], this.dezena[3].total[1], this.dezena[3].total[2], this.dezena[3].total[3]],
            label: this.dezena[3].dezena,
            fill: '-1'
          }, {
            backgroundColor: 'rgba(81, 46, 34, 1.0)',
            
            data: [this.dezena[4].total[0], this.dezena[4].total[1], this.dezena[4].total[2], this.dezena[4].total[3]],
            label: this.dezena[4].dezena,
            fill: '-1'
          }]
      },
      options: {
        maintainAspectRatio: false,
        spanGaps: false,
        elements: {
          line: {
            tension: 0.000001
          }
        },
				scales: {
					xAxes: [{
	
						ticks: {
							source: 'labels'
						}
					}],
					yAxes: [{
						stacked: true,
					}]
        },
        plugins: {
          filler: {
            propagate: false
          },
          'samples-filler-analyser': {
            target: 'chart-analyser'
          }
        }
			}

  });
}
}
