import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetuserpasswordComponent } from './resetuserpassword.component';

describe('ResetuserpasswordComponent', () => {
  let component: ResetuserpasswordComponent;
  let fixture: ComponentFixture<ResetuserpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetuserpasswordComponent]
    });
    fixture = TestBed.createComponent(ResetuserpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
