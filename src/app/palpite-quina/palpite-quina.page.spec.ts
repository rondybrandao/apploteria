import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalpiteQuinaPage } from './palpite-quina.page';

describe('PalpiteQuinaPage', () => {
  let component: PalpiteQuinaPage;
  let fixture: ComponentFixture<PalpiteQuinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalpiteQuinaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalpiteQuinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
