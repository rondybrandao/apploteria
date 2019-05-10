import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAnalizeLotofacilPage } from './modal-analize-lotofacil.page';

describe('ModalAnalizeLotofacilPage', () => {
  let component: ModalAnalizeLotofacilPage;
  let fixture: ComponentFixture<ModalAnalizeLotofacilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAnalizeLotofacilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAnalizeLotofacilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
