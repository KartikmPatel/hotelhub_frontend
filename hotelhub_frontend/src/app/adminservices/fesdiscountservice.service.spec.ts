import { TestBed } from '@angular/core/testing';

import { FesdiscountserviceService } from './fesdiscountservice.service';

describe('FesdiscountserviceService', () => {
  let service: FesdiscountserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FesdiscountserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
