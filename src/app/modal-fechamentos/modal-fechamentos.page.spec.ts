import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFechamentosPage } from './modal-fechamentos.page';

describe('ModalFechamentosPage', () => {
  let component: ModalFechamentosPage;
  let fixture: ComponentFixture<ModalFechamentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFechamentosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFechamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
