import { TestBed } from '@angular/core/testing';

import { PostExistsService } from './post-exists.service';

describe('PostExistsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostExistsService = TestBed.get(PostExistsService);
    expect(service).toBeTruthy();
  });
});
