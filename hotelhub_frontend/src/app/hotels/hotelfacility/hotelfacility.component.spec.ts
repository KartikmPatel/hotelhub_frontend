import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelfacilityComponent } from './hotelfacility.component';

describe('HotelfacilityComponent', () => {
  let component: HotelfacilityComponent;
  let fixture: ComponentFixture<HotelfacilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelfacilityComponent]
    });
    fixture = TestBed.createComponent(HotelfacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
