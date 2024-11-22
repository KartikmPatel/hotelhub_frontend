import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditroomcategoryComponent } from './editroomcategory.component';

describe('EditroomcategoryComponent', () => {
  let component: EditroomcategoryComponent;
  let fixture: ComponentFixture<EditroomcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditroomcategoryComponent]
    });
    fixture = TestBed.createComponent(EditroomcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
