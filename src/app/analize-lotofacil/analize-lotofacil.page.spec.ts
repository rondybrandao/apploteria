import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalizeLotofacilPage } from './analize-lotofacil.page';

describe('AnalizeLotofacilPage', () => {
  let component: AnalizeLotofacilPage;
  let fixture: ComponentFixture<AnalizeLotofacilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalizeLotofacilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalizeLotofacilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
