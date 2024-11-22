import { TestBed } from '@angular/core/testing';

import { RoomcategoryserviceService } from './roomcategoryservice.service';

describe('RoomcategoryserviceService', () => {
  let service: RoomcategoryserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomcategoryserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
