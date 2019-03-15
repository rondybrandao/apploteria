import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DezenasLotofacilPage } from './dezenas-lotofacil.page';

describe('DezenasLotofacilPage', () => {
  let component: DezenasLotofacilPage;
  let fixture: ComponentFixture<DezenasLotofacilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DezenasLotofacilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DezenasLotofacilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
