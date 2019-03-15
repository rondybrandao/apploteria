import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DezenasLotomaniaPage } from './dezenas-lotomania.page';

describe('DezenasLotomaniaPage', () => {
  let component: DezenasLotomaniaPage;
  let fixture: ComponentFixture<DezenasLotomaniaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DezenasLotomaniaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DezenasLotomaniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
