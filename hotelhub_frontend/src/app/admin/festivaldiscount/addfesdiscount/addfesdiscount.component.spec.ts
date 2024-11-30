import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfesdiscountComponent } from './addfesdiscount.component';

describe('AddfesdiscountComponent', () => {
  let component: AddfesdiscountComponent;
  let fixture: ComponentFixture<AddfesdiscountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddfesdiscountComponent]
    });
    fixture = TestBed.createComponent(AddfesdiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
