import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelloginComponent } from './hotellogin.component';

describe('HotelloginComponent', () => {
  let component: HotelloginComponent;
  let fixture: ComponentFixture<HotelloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelloginComponent]
    });
    fixture = TestBed.createComponent(HotelloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
