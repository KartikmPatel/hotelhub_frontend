import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelapproveComponent } from './hotelapprove.component';

describe('HotelapproveComponent', () => {
  let component: HotelapproveComponent;
  let fixture: ComponentFixture<HotelapproveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelapproveComponent]
    });
    fixture = TestBed.createComponent(HotelapproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
