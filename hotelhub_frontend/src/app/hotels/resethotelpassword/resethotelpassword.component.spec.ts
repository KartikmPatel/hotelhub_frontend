import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResethotelpasswordComponent } from './resethotelpassword.component';

describe('ResethotelpasswordComponent', () => {
  let component: ResethotelpasswordComponent;
  let fixture: ComponentFixture<ResethotelpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResethotelpasswordComponent]
    });
    fixture = TestBed.createComponent(ResethotelpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
