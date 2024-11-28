import { TestBed } from '@angular/core/testing';

import { HotelregisterserviceService } from './hotelregisterservice.service';

describe('HotelregisterserviceService', () => {
  let service: HotelregisterserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelregisterserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
