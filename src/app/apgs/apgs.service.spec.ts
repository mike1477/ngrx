import { TestBed } from '@angular/core/testing';

import { ApgsService } from './apgs.service';

describe('ApgsService', () => {
  let service: ApgsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApgsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
