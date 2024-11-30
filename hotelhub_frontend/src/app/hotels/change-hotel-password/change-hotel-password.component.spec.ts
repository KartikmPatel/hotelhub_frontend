import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeHotelPasswordComponent } from './change-hotel-password.component';

describe('ChangeHotelPasswordComponent', () => {
  let component: ChangeHotelPasswordComponent;
  let fixture: ComponentFixture<ChangeHotelPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeHotelPasswordComponent]
    });
    fixture = TestBed.createComponent(ChangeHotelPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
