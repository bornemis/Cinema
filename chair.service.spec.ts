import { TestBed } from '@angular/core/testing';

import { ChairService } from './chair.service';

describe('ChairService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChairService = TestBed.get(ChairService);
    expect(service).toBeTruthy();
  });
});