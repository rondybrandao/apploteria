import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAnalizeQuinaPage } from './modal-analize-quina.page';

describe('ModalAnalizeQuinaPage', () => {
  let component: ModalAnalizeQuinaPage;
  let fixture: ComponentFixture<ModalAnalizeQuinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAnalizeQuinaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAnalizeQuinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
