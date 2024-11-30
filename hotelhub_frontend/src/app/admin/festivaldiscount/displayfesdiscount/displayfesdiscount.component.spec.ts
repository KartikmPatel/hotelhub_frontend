import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayfesdiscountComponent } from './displayfesdiscount.component';

describe('DisplayfesdiscountComponent', () => {
  let component: DisplayfesdiscountComponent;
  let fixture: ComponentFixture<DisplayfesdiscountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayfesdiscountComponent]
    });
    fixture = TestBed.createComponent(DisplayfesdiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
