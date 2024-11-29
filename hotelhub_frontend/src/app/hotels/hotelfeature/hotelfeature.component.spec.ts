import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelfeatureComponent } from './hotelfeature.component';

describe('HotelfeatureComponent', () => {
  let component: HotelfeatureComponent;
  let fixture: ComponentFixture<HotelfeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelfeatureComponent]
    });
    fixture = TestBed.createComponent(HotelfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
