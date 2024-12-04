import { TestBed } from '@angular/core/testing';

import { UserhomeserviceService } from './userhomeservice.service';

describe('UserhomeserviceService', () => {
  let service: UserhomeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserhomeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
