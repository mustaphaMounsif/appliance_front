import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationTypeComponent } from './confirmation-type.component';

describe('ConfirmationTypeComponent', () => {
  let component: ConfirmationTypeComponent;
  let fixture: ComponentFixture<ConfirmationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
