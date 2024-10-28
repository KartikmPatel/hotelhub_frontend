import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelheaderComponent } from './hotelheader.component';

describe('HotelheaderComponent', () => {
  let component: HotelheaderComponent;
  let fixture: ComponentFixture<HotelheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelheaderComponent]
    });
    fixture = TestBed.createComponent(HotelheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
