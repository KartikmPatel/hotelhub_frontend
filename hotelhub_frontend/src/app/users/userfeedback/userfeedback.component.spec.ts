import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfeedbackComponent } from './userfeedback.component';

describe('UserfeedbackComponent', () => {
  let component: UserfeedbackComponent;
  let fixture: ComponentFixture<UserfeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserfeedbackComponent]
    });
    fixture = TestBed.createComponent(UserfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
