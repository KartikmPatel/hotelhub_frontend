import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfesdiscountComponent } from './editfesdiscount.component';

describe('EditfesdiscountComponent', () => {
  let component: EditfesdiscountComponent;
  let fixture: ComponentFixture<EditfesdiscountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditfesdiscountComponent]
    });
    fixture = TestBed.createComponent(EditfesdiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
