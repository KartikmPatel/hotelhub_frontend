import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayfacilityComponent } from './displayfacility.component';

describe('DisplayfacilityComponent', () => {
  let component: DisplayfacilityComponent;
  let fixture: ComponentFixture<DisplayfacilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayfacilityComponent]
    });
    fixture = TestBed.createComponent(DisplayfacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
