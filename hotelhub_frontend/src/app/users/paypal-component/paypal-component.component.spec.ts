import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalComponentComponent } from './paypal-component.component';

describe('PaypalComponentComponent', () => {
  let component: PaypalComponentComponent;
  let fixture: ComponentFixture<PaypalComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaypalComponentComponent]
    });
    fixture = TestBed.createComponent(PaypalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
