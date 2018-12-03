import { TestBed } from '@angular/core/testing';

import { AuthorarizationService } from './authorarization.service';

describe('AuthorarizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthorarizationService = TestBed.get(AuthorarizationService);
    expect(service).toBeTruthy();
  });
});
