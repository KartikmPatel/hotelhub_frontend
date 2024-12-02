import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelcityComponent } from './hotelcity.component';

describe('HotelcityComponent', () => {
  let component: HotelcityComponent;
  let fixture: ComponentFixture<HotelcityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelcityComponent]
    });
    fixture = TestBed.createComponent(HotelcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
