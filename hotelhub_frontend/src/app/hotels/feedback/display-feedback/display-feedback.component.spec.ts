import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFeedbackComponent } from './display-feedback.component';

describe('DisplayFeedbackComponent', () => {
  let component: DisplayFeedbackComponent;
  let fixture: ComponentFixture<DisplayFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayFeedbackComponent]
    });
    fixture = TestBed.createComponent(DisplayFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
