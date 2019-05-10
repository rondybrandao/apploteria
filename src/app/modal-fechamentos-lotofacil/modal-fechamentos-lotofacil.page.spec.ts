import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFechamentosLotofacilPage } from './modal-fechamentos-lotofacil.page';

describe('ModalFechamentosLotofacilPage', () => {
  let component: ModalFechamentosLotofacilPage;
  let fixture: ComponentFixture<ModalFechamentosLotofacilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFechamentosLotofacilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFechamentosLotofacilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
