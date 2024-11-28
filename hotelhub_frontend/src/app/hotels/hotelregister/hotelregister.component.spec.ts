import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelregisterComponent } from './hotelregister.component';

describe('HotelregisterComponent', () => {
  let component: HotelregisterComponent;
  let fixture: ComponentFixture<HotelregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelregisterComponent]
    });
    fixture = TestBed.createComponent(HotelregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
