import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFechamentoQuinaPage } from './modal-fechamento-quina.page';

describe('ModalFechamentoQuinaPage', () => {
  let component: ModalFechamentoQuinaPage;
  let fixture: ComponentFixture<ModalFechamentoQuinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFechamentoQuinaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFechamentoQuinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
