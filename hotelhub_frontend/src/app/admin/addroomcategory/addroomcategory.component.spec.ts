import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddroomcategoryComponent } from './addroomcategory.component';

describe('AddroomcategoryComponent', () => {
  let component: AddroomcategoryComponent;
  let fixture: ComponentFixture<AddroomcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddroomcategoryComponent]
    });
    fixture = TestBed.createComponent(AddroomcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
