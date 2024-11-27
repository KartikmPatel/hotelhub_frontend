import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFeaturesComponent } from './display-features.component';

describe('DisplayFeaturesComponent', () => {
  let component: DisplayFeaturesComponent;
  let fixture: ComponentFixture<DisplayFeaturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayFeaturesComponent]
    });
    fixture = TestBed.createComponent(DisplayFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
