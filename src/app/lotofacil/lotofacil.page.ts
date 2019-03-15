import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lotofacil',
  templateUrl: './lotofacil.page.html',
  styleUrls: ['./lotofacil.page.scss'],
})
export class LotofacilPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  fechamento_22x8x6(){
    this.router.navigate(['/dezenas-lotofacil', { fechamneto22x8x6: true }]);
  }

}
