import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadroVizualizacaoPage } from './quadro-vizualizacao.page';

describe('QuadroVizualizacaoPage', () => {
  let component: QuadroVizualizacaoPage;
  let fixture: ComponentFixture<QuadroVizualizacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadroVizualizacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadroVizualizacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
