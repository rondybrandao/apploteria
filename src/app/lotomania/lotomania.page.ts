import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lotomania',
  templateUrl: './lotomania.page.html',
  styleUrls: ['./lotomania.page.scss'],
})
export class LotomaniaPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  fechamento_90x10x6(){
    this.router.navigate(['/dezenas-lotomania', { fechamento_90x10x6: true }]);
  }
  fechamento_100x6(){
    this.router.navigate(['/dezenas-lotomania', { fechamento_100x6: true }]);
  }

}
