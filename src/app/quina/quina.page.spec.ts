import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuinaPage } from './quina.page';

describe('QuinaPage', () => {
  let component: QuinaPage;
  let fixture: ComponentFixture<QuinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuinaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
