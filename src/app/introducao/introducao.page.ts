import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-introducao',
  templateUrl: './introducao.page.html',
  styleUrls: ['./introducao.page.scss'],
})
export class IntroducaoPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  public nextPage() {

    this.router.navigate(['home']);
  }

}
