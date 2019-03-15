import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quina',
  templateUrl: './quina.page.html',
  styleUrls: ['./quina.page.scss'],
})
export class QuinaPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  fechamento_18x12x5x6(){
    this.router.navigate(['/dezenas-quina', { fechamento_18x12x5x6: true }]);
  }

  fechamento_10x19(){
    this.router.navigate(['/dezenas-quina', {fechamento_10x19: true}])
  }
}
