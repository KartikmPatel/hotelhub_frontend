import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotHotelPasswordComponent } from './forgot-hotel-password.component';

describe('ForgotHotelPasswordComponent', () => {
  let component: ForgotHotelPasswordComponent;
  let fixture: ComponentFixture<ForgotHotelPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotHotelPasswordComponent]
    });
    fixture = TestBed.createComponent(ForgotHotelPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
