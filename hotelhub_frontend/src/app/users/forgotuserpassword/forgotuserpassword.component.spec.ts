import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotuserpasswordComponent } from './forgotuserpassword.component';

describe('ForgotuserpasswordComponent', () => {
  let component: ForgotuserpasswordComponent;
  let fixture: ComponentFixture<ForgotuserpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotuserpasswordComponent]
    });
    fixture = TestBed.createComponent(ForgotuserpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
