import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLotomaniaPage } from './modal-lotomania.page';

describe('ModalLotomaniaPage', () => {
  let component: ModalLotomaniaPage;
  let fixture: ComponentFixture<ModalLotomaniaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalLotomaniaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLotomaniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
