import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaSenaPage } from './mega-sena.page';

describe('MegaSenaPage', () => {
  let component: MegaSenaPage;
  let fixture: ComponentFixture<MegaSenaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MegaSenaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaSenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
