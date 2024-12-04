import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowhoteldetailsComponent } from './showhoteldetails.component';

describe('ShowhoteldetailsComponent', () => {
  let component: ShowhoteldetailsComponent;
  let fixture: ComponentFixture<ShowhoteldetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowhoteldetailsComponent]
    });
    fixture = TestBed.createComponent(ShowhoteldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
