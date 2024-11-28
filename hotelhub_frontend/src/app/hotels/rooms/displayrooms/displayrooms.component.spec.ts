import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayroomsComponent } from './displayrooms.component';

describe('DisplayroomsComponent', () => {
  let component: DisplayroomsComponent;
  let fixture: ComponentFixture<DisplayroomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayroomsComponent]
    });
    fixture = TestBed.createComponent(DisplayroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
