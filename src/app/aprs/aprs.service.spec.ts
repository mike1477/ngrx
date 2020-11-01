import { TestBed } from '@angular/core/testing';

import { AprsService } from './aprs.service';

describe('AprsService', () => {
  let service: AprsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AprsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
