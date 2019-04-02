import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsotericoPage } from './esoterico.page';

describe('EsotericoPage', () => {
  let component: EsotericoPage;
  let fixture: ComponentFixture<EsotericoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsotericoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsotericoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
