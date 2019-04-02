import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalpitePage } from './palpite.page';

describe('PalpitePage', () => {
  let component: PalpitePage;
  let fixture: ComponentFixture<PalpitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalpitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalpitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
