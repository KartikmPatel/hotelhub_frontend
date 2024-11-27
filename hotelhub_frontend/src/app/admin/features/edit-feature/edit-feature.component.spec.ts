import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFeatureComponent } from './edit-feature.component';

describe('EditFeatureComponent', () => {
  let component: EditFeatureComponent;
  let fixture: ComponentFixture<EditFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditFeatureComponent]
    });
    fixture = TestBed.createComponent(EditFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
