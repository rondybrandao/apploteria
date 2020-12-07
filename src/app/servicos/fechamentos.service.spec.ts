import { TestBed } from '@angular/core/testing';

import { FechamentosService } from './fechamentos.service';

describe('FechamentosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FechamentosService = TestBed.get(FechamentosService);
    expect(service).toBeTruthy();
  });
});
