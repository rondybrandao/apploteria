import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DezenasQuinaPage } from './dezenas-quina.page';

describe('DezenasQuinaPage', () => {
  let component: DezenasQuinaPage;
  let fixture: ComponentFixture<DezenasQuinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DezenasQuinaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DezenasQuinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
