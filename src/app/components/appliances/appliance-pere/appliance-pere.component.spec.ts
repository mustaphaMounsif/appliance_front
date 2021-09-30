import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliancePereComponent } from './appliance-pere.component';

describe('AppliancePereComponent', () => {
  let component: AppliancePereComponent;
  let fixture: ComponentFixture<AppliancePereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliancePereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliancePereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
