import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateApplianceComponent } from './update-appliance.component';

describe('UpdateApplianceComponent', () => {
  let component: UpdateApplianceComponent;
  let fixture: ComponentFixture<UpdateApplianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateApplianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateApplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
