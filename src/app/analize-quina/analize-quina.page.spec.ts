import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalizeQuinaPage } from './analize-quina.page';

describe('AnalizeQuinaPage', () => {
  let component: AnalizeQuinaPage;
  let fixture: ComponentFixture<AnalizeQuinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalizeQuinaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalizeQuinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
