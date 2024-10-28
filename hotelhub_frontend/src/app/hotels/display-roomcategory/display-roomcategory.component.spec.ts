import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRoomcategoryComponent } from './display-roomcategory.component';

describe('DisplayRoomcategoryComponent', () => {
  let component: DisplayRoomcategoryComponent;
  let fixture: ComponentFixture<DisplayRoomcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayRoomcategoryComponent]
    });
    fixture = TestBed.createComponent(DisplayRoomcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
